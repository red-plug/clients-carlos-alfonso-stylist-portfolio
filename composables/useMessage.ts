
export const useMessage = () => {
  const message = useState('message', () => 'Hola, me gustaría recibir más información de tus servicios')

  const setMessage = (newMessage: string) => {
    message.value = newMessage
  }

  return {
    message,
    setMessage
  }
}