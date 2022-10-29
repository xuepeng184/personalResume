// renderer/container/root/index.tsx
import React from 'react';
import './index.css';
import { useHistory } from 'react-router';
import Logo from '@assets/logo.png'
import {shell} from 'electron'
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@src/common/utils/router';
 
function Root() {

  const history=useHistory()

  const onRouterToLink=(router:TSRouter.Item)=>{
    if(isHttpOrHttpsUrl(router.url)){
      console.log(router.url);
      shell.openExternal(router.url);
    }else{
      history.push(router.url)
    }
  }

  return (
    <div className="root">
      <div className="container">
        <img src={Logo} alt="" />
        <div className="title">VisResumeMook</div>
        <div className="tips">个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div className="actions">
          {
            ROUTER_ENTRY.map((router:TSRouter.Item)=>{
              return (
                <div key={router.key} className="item" onClick={()=>onRouterToLink(router)}>{router.text}</div>
              )
            })
          }
        </div>
        <div className="copyright">
          <div className="footer">
            <p className="copyright">
            Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By xp
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Root;