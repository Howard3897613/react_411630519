import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="app">
    <h1>自我介紹</h1>
    <h2>113(上)網路程式設計</h2>
    <h3><em>2024/09/26 更新</em></h3>
    <img src="images/dance.gif" alt="哈哈哈哈哈"/>
    
    </div>

    <p>
        <table cellPadding="10">
            <tr>
            <th>名稱</th>
            <th>系級</th>
            <th>年齡</th>
            <th>生日</th>
            <th>星座</th>
            <th>生肖</th>
            </tr>
            <tr>
            <td>陳庭浩</td>
            <td>資訊管理系</td>
            <td>20歲</td>
            <td><em>2004/04/25</em></td>
            <td>金牛座</td>
            <td>猴</td>
            </tr>
        </table>
    

    </p>

    <p><ol>
        <li><h4>履歷</h4>
            <ul>
                <li>畢業於國立新和國小</li>
                <li>畢業於私立南山國中</li>
                <li>畢業於私立南山高中</li>
                <li>就讀於淡江大學資訊管理系</li>
                <li>曾就職於台灣賓士股份有限公司 IT部門 工程師</li>
            </ul>
        </li>
        <li><h4>成就</h4>
            <ul>
                <li>105創客馬拉松競賽 最佳造型獎</li>
                <li>TQC 程式語言C 專業設計人才認證合格證書</li>
                <li>Oxford 英文檢定 B1</li>
                <li>全民英檢 中級初試通過</li>
                <li>全民中文能力檢定 高級</li>
                <li>山葉音樂能力檢定-鋼琴 九級</li>
                <li>ShutterStock 販售攝影集</li>
                <li>網路上連載原創小說</li>
            </ul>
            </li>
        <li><h4>興趣、同時也是專長</h4>
            <ul>
                <li>打遊戲<em>（這不是專長，我特別菜）</em></li>
                <li>看小說、寫小說</li>
                <li>攝影</li>
                <li>研究電腦</li>
            </ul>
            </li>
        
    </ol></p>
    <div>
        <span><p>這是一個小小的區塊，它很可愛。</p></span>
    </div>
      
        
    
    </>
  )
}

export default App
