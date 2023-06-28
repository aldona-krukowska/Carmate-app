import { deleteDoc, doc, collection, addDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { UserType } from './UserForm.types'
import React, { useEffect, useState } from 'react'
import { db } from '../../api/firebase'
import { StyledButton } from '../Button/Button'
import { clearForm } from '../../utils/clearForm'
import { Loader } from '../Loader/Loader'

export const UserForm = () => {
  const [users, setUsers] = useState<UserType[]>([])
  const [draftId, setDraftId] = useState<string | null>(null)
  const usersCollection = collection(db, 'users')

  const getUsers = (querySnapshot: any): UserType[] => {
    return querySnapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    }))
  }

  const getFormData = (event: React.FormEvent<Element>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const { username, email } = form

    const user = {
      name: username.value,
      email: email.value,
    }

    return user
  }

  const handleSubmit = (event: React.FormEvent) => {
    addDoc(usersCollection, getFormData(event))
    clearForm(event)
  }

  const handleDelete = (id: string) => {
    const docRef = doc(db, 'users', id)
    deleteDoc(docRef)
  }

  const handleUpdate = (event: React.FormEvent, docId: string) => {
    const docRef = doc(db, 'users', docId)
    updateDoc(docRef, getFormData(event)).then(() => {
      setDraftId(null)
    })
  }

  useEffect(() => {
    onSnapshot(usersCollection, (querySnapshot: any) => {
      const users = getUsers(querySnapshot)
      setUsers(users)
    })
  }, [])

  if (users === null) {
    return <Loader />
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Podaj nazwę użytkownika</label>
          <input type='text' name='username' id='username'></input>
        </div>
        <div>
          <label htmlFor='email'>Podaj e-mail</label>
          <input type='text' name='email' id='email'></input>
        </div>

        <button>Dodaj użytkownika</button>
      </form>
      <ul style={{ listStyle: 'none' }}>
        {users.map(({ id, name, email }) => (
          <li data-id={id} key={id}>
            {draftId !== id ? (
              <>
                <p>Nazwa: {name}</p>
                <p>e-mail: {email}</p>
                <StyledButton
                  buttonLabel='Usuń użytkownika'
                  variant={'tertiary'}
                  icon={null}
                  onClick={() => handleDelete(id)}
                  type='submit'
                />

                <StyledButton
                  buttonLabel='Aktualizuj dane użytkownika'
                  variant={'ghost'}
                  onClick={() => setDraftId(id)}
                  icon={null}
                />
              </>
            ) : (
              <form onSubmit={(event) => handleUpdate(event, id)}>
                <div>
                  <label htmlFor='username'>Podaj nazwę</label>
                  <input type='text' name='username' id='username' defaultValue={name} />
                </div>

                <div>
                  <label htmlFor='email'>Podaj nazwiske-mail</label>
                  <input type='text' name='email' id='email' defaultValue={email} />
                </div>

                <button type='submit'>Zatwierdź</button>
                <button type='button' onClick={() => setDraftId(null)}>
                  Anuluj edycję
                </button>
              </form>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
