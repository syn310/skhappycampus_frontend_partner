import React, { Component } from 'react';

const NoticePopup = ({noticeInfo, onClose}) => {
    
    return (
        <div className="popup_wrap">
            <div>
                <div className="popup_area_notice">
                    {/* <!-- 팝업 헤더 시작 --> */}
                    <div className="popup_header">
                        <div className="popup_title gt-f-l">{noticeInfo.noticeTitle}</div>
                        <div className="popup_close" onClick={onClose}></div>
                        <div className="clear"></div>
                    </div>
                    {/* <!-- 팝업 헤더 끝 --> */}
                    {/* <!-- 팝업 컨텐츠 시작 --> */}
                    <div className="popup_contents">
                        <div className="popup_contents_text" dangerouslySetInnerHTML={ {__html: noticeInfo.noticeContent}} >
                        </div>
                    </div>
                    {/* <!-- 팝업 컨텐츠 끝 --> */}
                </div>
            </div>
        </div>
    )
}

export default NoticePopup;

