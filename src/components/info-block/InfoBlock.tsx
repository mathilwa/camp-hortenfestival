import React from 'react';

import css from './info-block.less';

interface Props {
    title: string;
}
const InfoBlock: React.FC<Props> = ({ title, children }) => (
    <div className={css.infoBlock}>
        <div className={css.title}>{title}</div>
        <div className={css.info}>{children}</div>
    </div>
);

export default InfoBlock;
