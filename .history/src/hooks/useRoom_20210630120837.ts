import { useEffect, useState } from 'react';
import { database } from '../services/firebase';


type FirebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}>

type QuestionType = {
    id: string;
    author: {
        name: string;
        avatar: string
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}

export function useRoom(roomId: string) {

    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [title, setitle] = useState('');

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', room => {
            const databaseRoom = room.val();
            const FirebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
            const parsedQuestions = Object.entries(FirebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered,
                }
            })

            setitle(databaseRoom.title);
            setQuestions(parsedQuestions);
        })
    }, [roomId]);
}