import data from './data';
import {useState, useMemo} from 'react';
//import { useDeferredValue } from 'react';
import { useTransition } from 'react';

function DataHooks() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);
    //const defferedValue = useDeferredValue(text); // отложенное слежение за изменением text
    const [isPanding, startTransition] = useTransition();

    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(text));
    }, [text]); //[defferedValue]

    const onValueChange = (e) => {
        startTransition(() => {
            setText(e.target.value);
        })
    }

    // console.log(text, 'text');
    // console.log(posts, 'posts');

    // console.log(defferedValue);

    return (
        <>
            <input value={text} type='text' onChange={onValueChange}/>

            <hr/>

            <div>
                { isPanding ? <h4>Loading...</h4> : 
                    filteredPosts.map(post => (
                        <div key={post._id}>
                            <h4>{post.name}</h4>
                        </div>
                ))}
            </div>
        </>
    );
}

export default DataHooks;