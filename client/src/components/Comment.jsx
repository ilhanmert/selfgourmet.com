import { faHandSparkles, faPerson, faBurger, faTruckFast, faGlobe, faLocationDot, faStore, faRobot, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faRebel } from '@fortawesome/free-brands-svg-icons'
import { faGem, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiDish, BiLike } from 'react-icons/bi';
import { AiFillLike } from 'react-icons/ai';
import React, { useState } from 'react'
import { AdminBadge, Answer, BadgeArea, ChefBadge, CommentArea, CommentStyle, Deg, DegArea, Delete, FamousGourmetBadge, LikeButton, LocalBadge, ModBadge, PartnerBadge, Platform, ResponseArea, TravellerBadge, VedatMilorBadge, Writer } from './style/Comment.style'
import { useDispatch } from 'react-redux';
import { deleteCommentAction } from '../redux/actions/comment';
import WriteAnswer from './WriteAnswer';


const Comment = ({comment, token, user_id_isPartner, selected_partner_id, tabA, tabB}) => { //commentten user isim soyisim ve comment deg leri de inner join ile çekilecek exist kullanmak daha mantıklı olabilir
    const dispatch = useDispatch();
    // console.log(user_id_isPartner);
    
    const [c, setC] = useState(false);
    const [begen, setBegen] = useState({sayi: comment.like, state: false, overflow: comment.overflow});
    if(begen.sayi === 999) {
        setBegen({...begen, overflow: true, sayi: "999+"});
    }
    function begenArtiBir () {
        if(!begen.overflow && !begen.state) {
            setBegen({...begen, sayi: begen.sayi + 1 , state: true});
        }       
    }

    function deleteComment () {
        dispatch(deleteCommentAction({comment_id: comment.id, token: token?.token}));
    }

    const badges = [];
    switch (comment.comment_rate) {
        case 0: break;
        case 1: badges.push(<LocalBadge> <FontAwesomeIcon icon={faLocationDot} /> Local Gourmet</LocalBadge>); break;
        case 2: badges.push(<TravellerBadge> <FontAwesomeIcon icon={faGlobe} /> Traveller Gourmet</TravellerBadge>); break;
        case 3: badges.push(<><TravellerBadge> <FontAwesomeIcon icon={faGlobe} /> Traveller Gourmet</TravellerBadge><LocalBadge> <FontAwesomeIcon icon={faLocationDot} /> Local Gourmet</LocalBadge></>); break;
        case 4: badges.push(<ChefBadge> <FontAwesomeIcon icon={faSun} /> Chef Gourmet</ChefBadge>); break;
        case 5: badges.push(<FamousGourmetBadge> <FontAwesomeIcon icon={faGem} flip/> {comment.first_name} {comment.last_name} </FamousGourmetBadge>); break;
        case 6: badges.push(<VedatMilorBadge> <FontAwesomeIcon icon={faGem} flip/> <FontAwesomeIcon icon={faGem} flip/> Vedat Milor</VedatMilorBadge>); break;
        case 7: badges.push(<ModBadge><FontAwesomeIcon icon={faRobot} /> Moderator</ModBadge>); break;
        case 8: badges.push(<AdminBadge><FontAwesomeIcon icon={faRebel} flip style={{color: "red"}} /> Admin</AdminBadge>); break;
        default: break;
 
    }

    let user_name;
    if (comment.comment_rate > 3 && comment.comment_rate < 7) {
        user_name = comment.first_name + " " + comment.last_name;
    } else {
        user_name = comment.user_name;
    }

  return (
    <CommentStyle Response={comment.isAnswered || c}>
        <Writer>{user_name}</Writer>
        <BadgeArea>
            {badges}
        </BadgeArea>
        {comment.comment_rate !== 8 && comment.comment_rate !== 7 &&
            <DegArea>
                <Platform CLR={comment.platform_id}>{comment.platform_name}</Platform>
                <Deg value={comment.taste_point}> <FontAwesomeIcon icon={faBurger} shake /> {comment.taste_point}/5</Deg>
                {comment.speed_point === 0 ? "" : <Deg value={comment.speed_point}> <FontAwesomeIcon icon={faTruckFast} bounce /> {comment.speed_point}/5</Deg>}
                <Deg value={comment.service_point}> <BiDish style={{fontSize: "18px"}}/> {comment.service_point}/5</Deg>
                {comment.hygiene_point === 0 ? "" : <Deg value={comment.hygiene_point}> <FontAwesomeIcon icon={faHandSparkles} fade /> {comment.hygiene_point}/5</Deg>}
                {comment.staff_point === 0 ? "" : <Deg value={comment.staff_point}> <FontAwesomeIcon icon={faPerson} beatFade /> {comment.staff_point}/5</Deg>}
            </DegArea>
        }
        <CommentArea>
            {comment.comment}      
        </CommentArea>
        {comment.isAnswered && 
            <ResponseArea>
                <PartnerBadge><FontAwesomeIcon icon={faStore} /> Partner</PartnerBadge>
                {comment.answer}
                {/* {data.cevap_txt} */}
            </ResponseArea>
        }
        {comment.comment_rate !== 8 && comment.comment_rate !== 7 &&
            <LikeButton onClick={begenArtiBir}> {begen.state ? <AiFillLike/> : <BiLike/>} BEĞEN ({begen.sayi})</LikeButton>
        }
        {(comment.user_id === token?.userNow?.id || (token?.userNow?.comment_rate >= 7 && comment.comment_rate < 8)) &&
            <Delete onClick={deleteComment}><FontAwesomeIcon icon={faTrashCan} /></Delete>
        }
        {user_id_isPartner === token?.userNow?.id && !comment.isAnswered &&
            <Answer onClick={() => {setC(true)}}><FontAwesomeIcon icon={faPenToSquare} /></Answer>
        }
        {c && <WriteAnswer close={setC} comment_id={comment.id} token={token} selected_partner_id={selected_partner_id}
                    tabA={tabA} tabB={tabB}/>}

    </CommentStyle>
  )
}

export default Comment