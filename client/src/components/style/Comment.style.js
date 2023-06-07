import styled, { keyframes } from "styled-components";


export const CommentStyle = styled.div`
    background-color: ${({theme}) => theme.comment};
    border-radius: 5px;
    margin-left: 5px;
    width: calc(100% - 10px);
    height: ${props => props.Response ? "195.9px" : "100px" };
    /* height: 100px; */
    margin-top: 5px;
    color: black;
    position: relative;
    overflow: hidden;

    @media (max-width: 930px) {
        height: ${props => props.Response ? "217.4px" : "121.5px" };
        /* height: ${props => props.Response ? "222.8px" : "126.9px" }; */
        /* height: 126.9px; */
    }


`;


export const Writer = styled.div`
    user-select: none;
    color: ${({theme}) => theme.comment_writer_color};
    background-color: ${({theme}) => theme.comment_writer};
    font-size: 18px;
    padding-top: 1px;
    margin-left: 10px;
    /* width: 220px; */
    max-width: 220px;
    overflow: hidden;
    text-align: center;
    border-radius: 5px;
    height: 23.5px;
    border-top: 0.5px solid ${({theme}) => theme.comment_writer_border};
`;

export const CommentArea = styled.div`
    color: ${({theme}) => theme.comment_color};
    background-color: ${({theme}) => theme.comment_area};
    font-size: 16px;
    margin-left: 12px;
    margin-top: 5px;
    width: calc(100% - 22px - 10px);
    overflow: auto;
    height: 66px;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;

    @media (max-width: 930px) {
        margin-top: 26.9px;

    }
`;

export const Deg = styled.div`
    background-color: ${props => {
        if(props.value === 3) {
           return ({theme}) => theme.average_point
        } 
        if (props.value > 3) {
           return ({theme}) => theme.good_point
        }
        if (props.value < 3) {
           return ({theme}) => theme.bad_point
        }
    }};
    border-radius: 20px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 5px;

`;

export const Platform = styled(Deg)`
    background-color: ${props => {
        switch (props.CLR) {
            case 1: return ({theme}) => theme.restoran;
            case 2: return ({theme}) => theme.yemeksepeti; 
            case 3: return ({theme}) => theme.getir;
            case 4: return ({theme}) => theme.trendyol;
            case 5: return ({theme}) => theme.migros;
        
            default: return ({theme}) => theme.default_platform;
        }

    }};
    color: white;
    font-size: 10px;
    padding-top: 5px;
`;

export const DegArea = styled.div`
    user-select: none;
    display: flex;
    position: absolute;
    right: 10px;
    top: 5px;
`;

export const LikeButton = styled.div`
    user-select: none;
    position: absolute;
    background-color: ${({theme}) => theme.comment_likebutton};
    right: 6px;
    bottom: 4.2px;
    border-radius: 7px;
    padding-left: 10px;
    padding-right: 10px;
    color: white;

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
`;

export const Delete = styled.div`
    width: 10px;
    height: 10px;
    position: absolute;
    background-color: white;
    right: 6px;
    top: 24px;
    border-radius: 100px;
    padding: 3px 3px 3px 3px;
    color: red;
    text-align: center;
    font-size: 8px;

    &:hover{
        cursor: pointer;
        transform: scale(1.6);
    }

    &:active{
        background-color: black;
        color: white;

    }
    
`;

export const Answer = styled(Delete)`
    color: green;
`;

export const Badge = styled.div`
    background-color: orange;
    border-radius: 20px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 5px;
    font-size: 16px;
    height: 21.9px;
`;

export const VedatMilorBadge = styled(Badge)`
    background-color: ${({theme}) => theme.vedatMilor_badge};
`;
export const PartnerBadge = styled(Badge)`
    background-color: ${({theme}) => theme.partner_badge};
    width: 75px;
    margin-top: 5px;
    margin-left: -7px;
`;
export const FamousGourmetBadge = styled(Badge)`
    background-color: ${({theme}) => theme.famous_gourmet_badge_2}; //2 iyi
`;
export const ChefBadge = styled(Badge)`
    background-color: ${({theme}) => theme.chef_badge};
`;
export const TravellerBadge = styled(Badge)`
    background-color: ${({theme}) => theme.traveller_badge};
`;
export const LocalBadge = styled(Badge)`
    background-color: ${({theme}) => theme.local_badge};
`;
const grad = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;
export const AdminBadge = styled(Badge)`
    background: ${({theme}) => theme.admin_badge};
    background-size: 400% 400%;
    animation: ${grad} 3s ease infinite;
    color: ${({theme}) => theme.admin_badge_color};
`;
export const ModBadge = styled(Badge)`
    background: ${({theme}) => theme.mod_badge};
    background-size: 400% 400%;
    animation: ${grad} 3s ease infinite;
    color: ${({theme}) => theme.mod_badge_color};
`;
export const BadgeArea = styled.div`
    user-select: none;
    display: flex;
    position: absolute;
    left: 229px;
    top: 3px;
    
    @media (max-width: 930px) {
        top: 27.5px;
        left: 5px;

    }
`;

export const ResponseArea = styled.div`
    color: ${({theme}) => theme.comment_response_color};
    background-color: ${({theme}) => theme.comment_response};
    font-size: 16px;
    margin-left: 32px;
    margin-top: 3px;
    width: calc(100% - 22px - 10px - 20px - 5px);
    overflow: auto;
    height: calc(66px + 21.9px + 5px);
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 5px;

    @media (max-width: 930px) {
        /* margin-top: 26.9px; */

    }

`;
