import React, { useState, useEffect, useContext } from "react";
import { Title } from "../style";
import firebase from '../config/firebase'
import { AuthContext } from "../AuthService";
import List from "../List";

const Room = () => {

  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');

  const user = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      // alert('やることを入力してください。')
      return
    } else {
      firebase.firestore().collection('messages').add({
        content: value,
        user: user.displayName,
        //このfirebaseの機能は、ドキュメントのフィールドに、サーバーが更新を受信した時刻を追跡するサーバーのこと
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
    setValue('');
  }

  useEffect(() => {
    //orderByは降順がdesk,昇順がascを決めるときに使う
    //このfirebaseのfirestoreのorderBy()機能は、デフォルトでは、クエリを満たすすべてのドキュメントが、ドキュメント ID の昇順で取得される。
    firebase.firestore().collection('messages').orderBy('created')
    //snapshotは、collectionなのか！
      .onSnapshot((snapshot) => {
        //このdocはdocumentの1つ1つの要素
        console.log(snapshot.docs.map(doc => doc.data()))
        //このid: doc.idはどこから作られてきたのか。
        setMessages(snapshot.docs.map(doc => 
          { return { data: doc.data(), id: doc.id } }
          ))
      })
    // console.log(messages)
  }, [])

  return (
    <>
      <Title>Room</Title>
      <ul>
        {
          messages.map(message => {
            return (
              //このli別のコンポーネントで作る。
              // <li key={messages.id}>
              //   {message.data.user} : {message.data.content}
              // </li>
              <List key={message.id} data={message.data.user} content={message.data.content} />
            )
          })
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea value={value} onChange={(e) => setValue(e.target.value)}></textarea>
        <div><button type='submit'>送信</button></div>
      </form>
      <button onClick={() => { firebase.auth().signOut() }}>ログアウト</button>
    </>
  )
}

export default Room