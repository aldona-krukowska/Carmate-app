export const clearForm = (formOrEvent: HTMLFormElement | React.FormEvent) => {
  const form =
    formOrEvent instanceof HTMLFormElement ? formOrEvent : (formOrEvent.target as HTMLFormElement)
  form.reset()
}
