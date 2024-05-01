export const ChangeMessageState = ({handleMessage}) => {

    const messages = ['Hello', 'Hello World', 'Goodbye']

  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>Message 1</button>
        <button onClick={() => handleMessage(messages[1])}>Message 2</button>
        <button onClick={() => handleMessage(messages[2])}>Message 3</button>
    </div>
  )
}
