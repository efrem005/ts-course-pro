import styles from './UserInfo.module.scss';
import { LocalGithubUser } from "../../types";
import { InfoItem, InfoItemProps } from "../InfoItem";

import CompanyIcon from '../../assets/icon-company.svg?react'
import LocationIcon from '../../assets/icon-location.svg?react'
import TwitterIcon from '../../assets/icon-twitter.svg?react'
import WebsiteIcon from '../../assets/icon-website.svg?react'

interface UserInfoProps extends Pick<LocalGithubUser, "blog"|"company"|"location"|"twitter">{ }

export const UserInfo = ({company,twitter,location,blog}: UserInfoProps) => {

    const items: InfoItemProps[] = [
        {
            icon: <LocationIcon />,
            text: location
        },
        {
            icon: <WebsiteIcon />,
            text: blog,
            isLink: true
        },
        {
            icon: <TwitterIcon />,
            text: twitter
        },
        {
            icon: <CompanyIcon />,
            text: company
        },
    ]

    return (
        <div className={styles.userInfo}>
            {items.map((item, idx) => <InfoItem key={idx} {...item} />)}
        </div>
    );
}
