import React from 'react';
import logo from './logo.svg'
import picture from './coinbase-bg.jpg';
import Usage from './use.webp';
import background from './background.webp';
import svg from './skale.svg';
import amp from './amp.svg';
import gra from './gra.svg';
import ste from './ste.svg';
import chart from './chart.JPG';

function Home() {
    return (
        <div className="wrapper">
        <div className='App-header'>
            <div className="logo">
                <a href="index">
                    <img src={logo} alt="" />
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Price</a></li>
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Individuals</a></li>
                    <li><a href="#">Businesses</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Company</a></li>
                </ul>
            </nav>
            <div className="headerButton">
                <li><a href="">Sign in</a></li>
                <li className='btn1'><a href="">Get started</a></li>
            </div>
           
        </div>
        <div className="content1">
                <div className="row">
                    <div className="col1">
                        <div className="left-side">
                            <div className="floatLeft">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="HeroPill__NakedBitcoinIcon-sc-16ndsef-2 gLnfIS"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#1652F0"></path><path d="M17.274 10.515c.235-1.572-.962-2.417-2.599-2.981l.531-2.13-1.296-.323-.517 2.074c-.34-.086-.69-.165-1.039-.245l.521-2.087L11.58 4.5l-.53 2.13c-.283-.065-.56-.128-.829-.196l.002-.007-1.788-.446-.345 1.385s.962.22.942.234c.525.13.62.478.603.754L9.03 10.78c.036.01.083.023.135.043l-.137-.034-.848 3.4c-.064.158-.227.398-.595.307.014.019-.941-.235-.941-.235L6 15.745l1.688.42c.313.08.62.162.923.239l-.537 2.154 1.296.322.53-2.13c.355.096.698.184 1.034.268l-.53 2.121 1.297.323.536-2.15c2.211.419 3.873.25 4.573-1.75.564-1.61-.028-2.538-1.191-3.144.847-.195 1.485-.752 1.655-1.903zm-2.963 4.153c-.4 1.61-3.11.74-3.99.522l.713-2.854c.879.22 3.697.654 3.277 2.332zm.402-4.176c-.365 1.464-2.621.72-3.353.537l.645-2.587c.731.182 3.089.522 2.708 2.05z" fill="#fff"></path></svg>
                            </div>
                            <div className="floatRight">
                            <li><a href="">Jump start your portfolio</a></li>
                            </div>
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" class="HeroPill__StyledIncentiveArrow-sc-16ndsef-0 eOcbbt"><path d="M0 7h12.17l-3.28 3.28 1.41 1.41L16 6 10.3.31 8.89 1.72 12.17 5H0v2z" fill="#1652F0"></path></svg>
                            <h1>Jump start your crypto portfolio</h1>
                            <h3>Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</h3>
                            <div className="form">
                                <form action="" method="post">
                                    <input type="text" placeholder='Email Address'/>
                                    <button type="submit">Get started</button>
                                    <li><a href="">Terms apply</a></li> 
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col2">
                        <img src={picture} alt="" />
                    </div>
                </div>
        </div>
        <div className="content2">
                <div className="table-content">
                    <div className="table">
                        <div className="table-col">
                                <h3 className="number">#</h3>
                                <h3 className="nameStart">Name</h3> 
                                <h3 className="price">Price</h3>
                                <h3 className="spacing">Change</h3>
                                <h3 className="spacing">Chart</h3>
                                <h3>Trade</h3>
                        </div>
                    </div>
                    <div className="table">
                        <div className="table-col table-col2">
                                <h3 className="number">1</h3>
                                <img class="AssetTableRow__Icon-bzcx4v-19 fgsiwR icon" src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" alt="Bitcoin logo" aria-label="Bitcoin logo" loading="lazy" height="36" width="36"></img>
                                <h3 className="name">Bitcoin BTC</h3> 
                                <h3 className="price">GHS 257,757.84</h3>
                                <h3 className="spacing color-green">+0.42</h3>
                                <h3 className="spacing"><img src={chart} alt="" /></h3>
                                <button type="submit">Buy</button>
                        </div>
                    </div>
                    <div className="table">
                        <div className="table-col table-col2">
                                <h3 className="number">2</h3>
                                <img class="AssetTableRow__Icon-bzcx4v-19 fgsiwR icon" src="https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png" alt="Ethereum logo" aria-label="Ethereum logo" loading="lazy" height="36" width="36"></img>
                                <h3 className="name">Ethereum ETH</h3> 
                                <h3 className="price">GHS 13,779.03</h3>
                                <h3 className="spacing color-red">-1.43</h3>
                                <h3 className="spacing"><img src={chart} alt="" /></h3>
                                <button type="submit">Buy</button>
                        </div>
                    </div>
                    <div className="table">
                        <div className="table-col table-col2">
                                <h3 className="number">3</h3>
                                <img class="AssetTableRow__Icon-bzcx4v-19 fgsiwR icon" src="https://dynamic-assets.coinbase.com/93a4303d1b0410b79bb1feac01020e4e7bdf8e6ece68282d0af2c7d0b481c5f5c44c0cec1d7071ae8f84674dbd139e290d50a038a6a4c1bbc856ec0871b5f3e2/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png" alt="Bitcoin Cash logo" aria-label="Bitcoin Cash logo" loading="lazy" height="36" width="36"></img>
                                <h3 className="name">Bitcoin Cash BCH</h3> 
                                <h3 className="price">GHS 3,895.06</h3>
                                <h3 className="spacing color-red">-4.23</h3>
                                <h3 className="spacing"><img src={chart} alt="" /></h3>
                                <button type="submit">Buy</button>
                        </div>
                    </div>
                    <div className="table border-bottom">
                        <div className="table-col table-col2">
                                <h3 className="number">4</h3>
                                <img class="AssetTableRow__Icon-bzcx4v-19 fgsiwR icon" src="https://dynamic-assets.coinbase.com/f018870b721574ef7f269b9fd91b36042dc05ebed4ae9dcdc340a1bae5b359e8760a8c224bc99466db704d10a3e23cf1f4cd1ff6f647340c4c9c899a9e6595cd/asset_icons/984a4fe2ba5b2c325c06e4c2f3ba3f1c1fef1f157edb3b8ebbfe234340a157a5.png" alt="Litecoin logo" aria-label="Litecoin logo" loading="lazy" height="36" width="36"></img>
                                <h3 className="name">Litecoin LTC</h3> 
                                <h3 className="price">GHS 1,026.46</h3>
                                <h3 className="spacing color-red">-4.63</h3>
                                <h3 className="spacing"><img src={chart} alt="" /></h3>
                                <button type="submit">Buy</button>
                        </div>
                    </div>
             
        </div>
        <div className="row top">
                    <div className="col1">
                        <div className="new-left-side">
                            <h2>Earn up to $28 worth of crypto</h2>
                            <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                            <button>Start earning</button>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="element1 element2">
                            <img src={svg} alt="" />
                            <h2>SKALE SKL</h2>
                            <h3>Earn $3 SKL</h3>
                        </div>
                        <div className="element1 element2">
                            <img src={amp} alt="" />
                            <h2>Ampleforth Governance Token </h2>
                            <h3>Earn $3 FORTH</h3>
                        </div>
                        <div className="element1 element2">
                            <img src={gra} alt="" />
                            <h2>The Graph GRT</h2>
                            <h3>Earn $3 GRT</h3>
                        </div>
                        <div className="element1 element2">
                            <img src={ste} alt="" />
                            <h2>Stellar Lumens XML</h2>
                            <h3>Earn $3 XML</h3>
                        </div>
                        <li><a href="">View more</a></li>
                    </div>
                </div>
                <div className="section">
                    <h2 className="section-header">Create your cryptocurrency portfolio today</h2>
                    <p className="section-p">Coinbase has a variety of features that make it the best place to start trading</p>
                </div>
                <div className="row">
                    <div className="col1"> 
                        <div className="contain">
                            <div className="element0">
                            <svg width="30" height="32" viewBox="0 0 30 32"><g fill="none" fill-rule="evenodd"><path fill="#D4EEFF" d="M10 32h10V10H10z"></path><path fill="#1752F0" d="M20 32h10V0H20z"></path><path fill="#55B4FC" d="M0 32h10V19H0z"></path></g></svg>
                            </div>  
                            <div className="wording">
                            <h1>Manage your portfolio</h1>
                            <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                            </div>
                        </div>
                        <div className="contain">
                            <div className="element0">
                                 <svg width="36" height="38" viewBox="0 0 36 38"><g fill="none" fill-rule="evenodd"><path d="M17.813 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0017.811 9.5M29.688 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0029.688 9.5" fill="#D4EEFF"></path><path fill="#D4EEFF" d="M0 38h35.625V4.75H0z"></path><path fill="#55B4FC" d="M0 11.875h35.625V4.75H0z"></path><path d="M5.938 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 005.937 9.5" fill="#D4EEFF"></path><path d="M27.313 4.75v2.375a2.375 2.375 0 004.75 0V4.75h-4.75zM5.938 9.5a2.375 2.375 0 002.375-2.375V4.75h-4.75v2.375A2.375 2.375 0 005.937 9.5" fill="#1752F0"></path><path d="M17.813 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0017.811 9.5" fill="#D4EEFF"></path><path d="M17.813 9.5a2.375 2.375 0 002.375-2.375V4.75h-4.75v2.375A2.375 2.375 0 0017.811 9.5" fill="#1752F0"></path><path fill="#FFF" d="M4.75 34.438h26.125V11.875H4.75z"></path><path fill="#1752F0" d="M12.69 26.329l3.359 3.359L26.125 19.61l-3.358-3.359z"></path><path fill="#1752F0" d="M16.049 29.688l3.359-3.36-6.244-6.243-3.359 3.36z"></path></g></svg>
                            </div>
                            <div className="wording">
                            <h1>Recurring buys</h1>
                            <p>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.</p>
                            </div>  
                        </div>
                        <div className="contain">
                            <div className="element0">
                                <svg width="30" height="33" viewBox="0 0 30 33" fill="none"><path d="M15 0C9.106 0 4.284 4.64 4.284 11.344V25.78h21.429V11.344C25.714 4.64 20.892 0 14.999 0z" fill="#D4EEFF"></path><path d="M30 12.375H0V33h30V12.375z" fill="#56B4FC"></path><path d="M25.714 12.375H4.285v16.5h21.429v-16.5z" fill="#1652F0"></path><path d="M15 18.563l2.84 6.187h-5.68L15 18.562z" fill="#fff"></path><path d="M15 20.625c1.184 0 2.143-.923 2.143-2.063 0-1.139-.96-2.062-2.143-2.062-1.183 0-2.143.923-2.143 2.063 0 1.139.96 2.062 2.143 2.062z" fill="#fff"></path></svg>
                            </div>
                            <div className="wording">
                                <h1>Vault protection</h1>
                                <p>For added security, store your funds in a vault with time delayed withdrawals.</p>
                            </div>
                        </div>
                        <div className="contain">
                            <div className="element0">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M36 2.25H0v31.5h36V2.25z" fill="#D4EEFF"></path><path d="M28.125 36H7.875a1.128 1.128 0 01-1.125-1.125V1.125C6.75.506 7.256 0 7.875 0h20.25c.618 0 1.125.506 1.125 1.125v33.75c0 .619-.507 1.125-1.125 1.125z" fill="#56B4FC"></path><path d="M29.25 2.25H6.75v31.5h22.5V2.25z" fill="#1652F0"></path><path d="M23 15.137L21.889 14l-6.667 6.822 1.11 1.137L23 15.137z" fill="#fff"></path><path d="M16.334 22l1.11-1.137-3.333-3.411-1.11 1.137L16.333 22z" fill="#fff"></path><path d="M23.625 3.375h-11.25a1.128 1.128 0 01-1.124-1.125V1.125h13.5V2.25c0 .619-.507 1.125-1.126 1.125z" fill="#56B4FC"></path><path d="M15.75 32.063c0 .337.226.562.563.562h3.375c.338 0 .563-.225.563-.562 0-.338-.226-.563-.563-.563h-3.375c-.337 0-.562.225-.562.563z" fill="#fff"></path></svg>
                            </div>
                            <div className="wording">
                                <h1>Mobile apps</h1>
                                <p>Stay on top of the markets with the Coinbase app for Android or iOS.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col2 image">
                        <img src={Usage} alt="" />
                    </div>
                </div>
                <div className="section">
                    <h2 className="section-header section-header2">The most trusted cryptocurrency platform</h2>
                    <p className="section-p section-p2">Here are a few reasons why you should choose Coinbase</p>
                </div>
                <div className="section-3">
                    <div className="box-1">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M56 0H8v50h48V0z" fill="#BFE9FF"></path><path d="M64 10H0v48h64V10z" fill="#56B4FC"></path><path d="M56 10H8v40h48V10z" fill="#1652F0"></path><path d="M10 16H6v8h4v-8zM10 36H6v8h4v-8z" fill="#1652F0"></path><path d="M64 58h-8v6h8v-6zM8 58H0v6h8v-6z" fill="#56B4FC"></path><path d="M41.19 20.81c-5.07-5.07-13.32-5.07-18.38 0-5.06 5.07-5.07 13.32 0 18.38 2.53 2.53 5.86 3.8 9.19 3.8 3.33 0 6.66-1.27 9.19-3.8 5.07-5.07 5.07-13.31 0-18.38zM32 19c2.5 0 5 .85 7.04 2.55l-2.85 2.85A6.99 6.99 0 0032 23c-1.53 0-2.98.5-4.19 1.4l-2.85-2.85A11.03 11.03 0 0132 19zm3.54 14.54c-.95.94-2.2 1.46-3.54 1.46-1.34 0-2.59-.52-3.54-1.46A4.952 4.952 0 0127 30c0-1.33.52-2.59 1.46-3.54.94-.95 2.2-1.46 3.54-1.46 1.34 0 2.59.52 3.54 1.46.95.94 1.46 2.21 1.46 3.54s-.52 2.59-1.46 3.54zM23.55 22.96l2.85 2.85A6.99 6.99 0 0025 30c0 1.53.5 2.98 1.4 4.19l-2.85 2.85a11.018 11.018 0 010-14.08zm1.41 15.49l2.85-2.85a6.969 6.969 0 008.38 0l2.85 2.85a11.018 11.018 0 01-14.08 0zm15.49-1.41l-2.85-2.85c.9-1.2 1.4-2.65 1.4-4.19 0-1.53-.5-2.98-1.4-4.19l2.85-2.85a11.018 11.018 0 010 14.08z" fill="#fff"></path></svg>
                        <h2>Secure storage</h2>
                        <p>We store the vast majority of the digital assets in secure offline storage.</p>
                        <li> <a href="">Learn how Coinbase keeps your funds safe and secure </a></li>   
                    </div>
                    <div className="box-1">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M56 56h-8v8h8c4.42 0 8-3.58 8-8h-8z" fill="#BFE9FF"></path><path d="M48 56V0H0v56c0 4.42 3.58 8 8 8h48c-4.42 0-8-3.58-8-8z" fill="#56B4FC"></path><path d="M48 56H0c0 4.42 3.58 8 8 8h48c-4.42 0-8-3.58-8-8z" fill="#1652F0"></path><path d="M40 30H8v2h32v-2zM40 36H8v2h32v-2zM40 42H8v2h32v-2zM32 48H16v2h16v-2zM23.5 24.66l-3.24-5.92-5.92-3.24 5.92-3.24 3.24-5.92 3.24 5.92 5.92 3.24-5.92 3.24-3.24 5.92zm-4.99-9.16l3.22 1.76 1.76 3.22 1.76-3.22 3.22-1.76-3.22-1.76-1.76-3.22-1.76 3.22-3.22 1.76z" fill="#fff"></path></svg>
                        <h2>Protected by insurance</h2>
                        <p>Cryptocurrency stored on our servers is covered by our insurance policy.</p>
                        <li> <a href="">Learn how your crypto is covered by our insurance policy</a></li>   
                    </div>
                    <div className="box-1">
                        <svg width="56" height="64" viewBox="0 0 56 64" fill="none"><path d="M56 0H24v64h32V0z" fill="#BFE9FF"></path><path d="M0 8v28c0 13.25 24 24 24 24s24-10.75 24-24V8H0z" fill="#56B4FC"></path><path d="M24 8v52s24-10.75 24-24V8H24z" fill="#1652F0"></path><path d="M7 15v21c0 4.92 8.57 11.72 16.53 15.97l.47.25.47-.25C32.43 47.72 41 40.92 41 36V15H7zm32 2v6H9v-6h30zM24 49.95C15.55 45.35 9 39.28 9 36V25h30v11c0 3.28-6.55 9.35-15 13.95z" fill="#fff"></path></svg>
                        <h2>Industry best practices</h2>
                        <p>Coinbase supports a variety of the most popular digital currencies.</p>
                        <li> <a href="">Learn how we implement industry best practices for account security </a></li>   
                    </div>
                    </div>
                </div>
                <div className="row3">
                    <div className="numbers">
                        <h1>$335B</h1>
                        <p>Quarterly volume traded</p>
                    </div>
                    <div className="numbers">
                        <h1>100+</h1>
                        <p>Countries supported</p>
                    </div>
                    <div className="numbers">
                        <h1>56+M</h1>
                        <p>Verified users</p>
                    </div>
                </div>
                <div className="section">
                    <h2 className="section-header">Get started in a few minutes</h2>
                    <p className="section-p">Coinbase supports a variety of the most popular digital currencies.</p>
                </div>
                <div className="section-3">
                    <div className="number-1">
                        <svg width="64" height="60" viewBox="0 0 64 60" fill="none"><path d="M32 16a8 8 0 100-16 8 8 0 000 16zM32 20c-11.05 0-20 7.16-20 16v18h40V36c0-8.84-8.95-16-20-16z" fill="#56B4FC"></path><path d="M64 36H0v24h64V36z" fill="#BFE9FF"></path><path d="M52 36H12v24h40V36z" fill="#1652F0"></path><path d="M33 42h-2v12h2V42z" fill="#fff"></path><path d="M38 49v-2H26v2h12z" fill="#fff"></path></svg>
                        <h1>Create an account</h1>
                    </div>
                    <div className="number-1">
                        <svg width="65" height="56" viewBox="0 0 65 56" fill="none"><path d="M57.03 20h-50v24h50V20z" fill="#BFE9FF"></path><path d="M60.03 52v-4h-8V16.06L64 16.1l.01-4.1L32.06 0 .01 12 0 15.9l12.03.04V48h-8v4h-4v4h64v-4h-4zm-16-4h-8V16.01l8 .03V48zm-24-32.04l8 .03V48h-8V15.96z" fill="#56B4FC"></path><path d="M52.03 20h-40v24h40V20z" fill="#1652F0"></path><path d="M36.41 34.38c0-2.34-1.42-3.12-4.17-3.5-2.03-.29-2.42-.77-2.42-1.72 0-.9.69-1.54 2.01-1.54 1.34 0 2.04.52 2.26 1.75h1.99c-.19-1.86-1.26-2.96-3.06-3.28V24h-2v2.05c-1.98.28-3.26 1.6-3.26 3.29 0 2.19 1.32 3.04 4.12 3.42 1.9.31 2.44.72 2.44 1.8s-.92 1.8-2.21 1.8c-1.98 0-2.45-.98-2.6-2.16h-2.09c.14 1.94 1.2 3.4 3.61 3.72V40h2v-2.08c2.06-.33 3.38-1.77 3.38-3.54z" fill="#fff"></path></svg>
                        <div className="line"></div>
                        <h1>Link your bank account</h1>
                    </div>
                    <div className="number-1">
                        <svg width="61" height="56" viewBox="0 0 61 56" fill="none"><path d="M40 40.5v-.99c0-.89-.59-1.68-1.45-1.92l-9.21-2.63a7.975 7.975 0 00-6.31.83L16 40v12h15.65c2.88 0 5.73-.52 8.43-1.53L60 43c.9-2.26-.93-4.67-3.35-4.39L40 40.5z" fill="#56B4FC"></path><path d="M16 36H0v20h16V36z" fill="#BFE9FF"></path><path d="M16 40H0v12h16V40z" fill="#1652F0"></path><path d="M28 20c5.523 0 10-4.477 10-10S33.523 0 28 0 18 4.477 18 10s4.477 10 10 10z" fill="#56B4FC"></path><path d="M48 36c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z" fill="#1652F0"></path><path d="M32 9h-3V6h-2v3h-3v2h3v3h2v-3h3V9zM52 27v-2h-8v2h8z" fill="#fff"></path></svg>
                        <div className="line"></div>
                        <h1>Start buying & selling</h1>
                    </div>
                </div>
                <div className="row wallpaper">
                    <div className="col1">
                        <div className="new-left-side-2">
                            <h2>Earn up to $28 worth of crypto</h2>
                            <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                            <button>Start earning</button>
                        </div>
                    </div>
                    <div className="col2 imgs">
                        <img src={background} alt="" />
                    </div>
                </div>
                <div className="row4">
                    <div className="col4-1">
                        <div className="logo">
                        <a href="index">
                            <img src={logo} alt="" /> 
                        </a>
                    </div>
                        <select name="" id="">
                            <option value="">English</option>
                            <option value="">Espanol</option>
                            <option value="">Francis</option>
                        </select>
                        <h3>© 2021 Coinbase</h3>
                        <div className="container">
                        <li><a href="">Blog</a></li><div className="dot"></div>
                        <li><a href="">Twitter</a></li><div className="dot"></div>
                        <li><a href="">Facebook</a></li>
                        </div>
                    </div>
                    <div className="col4">
                        <h2>Company</h2>
                        <li><a href="">About</a></li>    
                        <li><a href="">Careers</a></li>
                        <li><a href="">Affiliates</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Press</a></li>
                        <li><a href="">Investors</a></li>
                        <li><a href="">Legal & Privacy</a></li>
                        <li><a href="">Cookie policy</a></li>
                        <h2>Learn</h2>
                        <li><a href="">Browse crypo prices</a></li>    
                        <li><a href="">Crypo basics</a></li>
                        <li><a href="">Tips & tutorials</a></li>
                        <li><a href="">Market updates</a></li>
                        <li><a href="">What is Bitcoin</a></li>
                        <li><a href="">What is crypto</a></li>
                        <li><a href="">What is a blockchain</a></li>
                        <li><a href="">How to set up a crypto wallet</a></li>
                        <li><a href="">How to send crypto Taxes</a></li>
                    </div>
                    <div className="col4">
                        <h2>Individual</h2>
                        <li><a href="">Buy & sell</a></li>    
                        <li><a href="">Earn free crypto</a></li>
                        <li><a href="">Wallet</a></li>
                        <li><a href="">Card</a></li>
                        <h2>Businesses</h2>
                        <li><a href="">Prime</a></li>    
                        <li><a href="">Custody</a></li>
                        <li><a href="">Asset Hub</a></li>
                        <li><a href="">Commerce</a></li>
                        <h2>Developers</h2>
                        <li><a href="">Coinbase Cloud</a></li>    
                        <li><a href="">Connect</a></li>
                        <li><a href="">Commerce</a></li>
                        <li><a href="">Pro</a></li>
                        <li><a href="">Bison Trails</a></li>
                        <li><a href="">WalletLink</a></li>
                        <li><a href="">Rosetta</a></li>
                        <li><a href="">USDC</a></li>
                    </div>
                    <div className="col4">
                        <h2>Support</h2>
                        <li><a href="">Help center</a></li>    
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Create an account</a></li>
                        <li><a href="">ID verifcation</a></li>
                        <li><a href="">Account info</a></li>
                        <li><a href="">Payment Methods</a></li>
                        <li><a href="">Account access</a></li>
                        <li><a href="">Supported crypto</a></li>
                        <li><a href="">Supported countries</a></li>
                        <li><a href="">Status</a></li> 
                    </div>
                </div>
        </div>
    )
}

export default Home
