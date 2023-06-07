import React, { useRef, useState } from 'react'
import { CommentTextArea, MaxTextValue, SideArea, SubmitBut, WriteCommentArea, WriteCommentStyle } from './style/WriteAnswer.styleed';
import { useDispatch } from 'react-redux';
import { postAnswerAction } from '../redux/actions/comment';

const WriteAnswer = ({close, comment_id, token, selected_partner_id, tabA, tabB}) => {
    const dispatch = useDispatch();
    const bgRef = useRef(null);
    

    const [answer, setAnswer] = useState("");
    const [err, setErr] = useState(false);

    function gonder () {
        if(answer.length < 10) return setErr(true);
        if(tabA) dispatch(postAnswerAction(comment_id, answer, token?.token, selected_partner_id, "like"));
        if(tabB) dispatch(postAnswerAction(comment_id, answer, token?.token, selected_partner_id, "time"));
        close(false);
    }

    function answerInputChange (e) {
        setAnswer(e.target.value);
        setErr(false);
    }


  return (
    <WriteCommentStyle
        ref={bgRef} 
        onClick={
        (e) => {
            if (e.target === bgRef.current) {
                close(false);
            }
            
        }
        }>
        <WriteCommentArea>
            <CommentTextArea name='comment' onChange={answerInputChange} maxLength={180}/>
            <SideArea>
                <MaxTextValue ERR={err}>{err ? "En az 10 karakter" : `Kalan karakter ${180 - answer.length}`}</MaxTextValue>
                <SubmitBut onClick={gonder}>GÖNDER</SubmitBut>      
            </SideArea>
        </WriteCommentArea>
    </WriteCommentStyle>
  )
}

export default WriteAnswer