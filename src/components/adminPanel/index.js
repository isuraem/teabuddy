// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Dashboard from './dashBoard';
import Analytics from './analytics';
import ThroughManagement from './troughManagement';
import TeaLeafCategorizer from './teaLeafCategorizer';
import TeaGradePredictor from './teaGradePredictor';
import TeaVitalityAdvisor from './teaVitalityAdvisor';
import styles from './adminPanel.module.scss';


function AdminPanel() {
    let history = useNavigate()
    let [isLockedState, setIsLockedState] = useState(false);
    let [expand, setState] = useState(true);

    const onToggle = (expand) => {
        setState(expand);
    };

    return (
        <>
            <SideNav
                className={styles.sideNavBar}
                onSelect={(selected) => {
                    const to = `/${selected}`;
                    if (location.pathname !== to) {
                        history(to);
                    }
                }}
                onToggle={(e) => onToggle(e)}
                expanded={isLockedState === true ? false : expand}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="company/dashboard">
                    <div>
                        <p className={`${((expand === false) || (isLockedState === true)) ? styles.companyNameHide : styles.companyName}`}>Tea Buddy</p>

                    </div>
                    {((expand === false) || (isLockedState === true)) ? <div className={styles.hiddendivcollapse}></div> : <div className={styles.hiddendiv}></div>}
                    <NavItem eventKey="company/dashboard">
                        <NavIcon>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.25 7.5H4.75" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.625 4.5H2.375" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.625 10.5H2.375" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.25 13.5H4.75" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </NavIcon>
                        <NavText>
                            Dashboard
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="company/analytics">
                        <NavIcon>
                            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3334 8.5H15.0001L12.5001 15.625L7.50008 1.375L5.00008 8.5H1.66675" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </NavIcon>
                        <NavText>
                            Analytics
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="company/throughManagement">
                        <NavIcon>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="18" height="18" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_18_179" transform="scale(0.02)" />
                                    </pattern>
                                    <image id="image0_18_179" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACo0lEQVR4nO2ZT4hNcRTHf8if8mcsSBg2CvGIpqQo2VjYEBYopSbFCEuL2WGyVZoRG1FjQUmaechKpOTPVmQxSoppBmPedj46nPc6br8373rmvTl3ut+6dd/5/Tm/zz2/3+/87n0hVBEOFeoRDhVyEGcKeUScKWQwIiPArayDjAH7dAwXsgTSA3wxv7vU/0LgfUNB6uow3m+32goK0w9M16t/Qvw2CUQGX1D7OolCbEo1DGSC9RXYYPzu1XWSOZAKDLAW+FGtUhZAytPsw3gVsgJSU1kEGckTYlJNfPp5Qkyl8R5huh5S9ZsnxNSiucoToreIpFKoRzhUyEGmekTCfygHYYqtEWAasCxLINeAUwnbYqAPGAbasgJyGtiVsH0294PARk8g94FiwvYN2AosBz4lyh4DD83RZr4XkKJ+x+oAngBHgNlmHDOAPcBzoBOYB7zTtlc9RUTUEfE/V66IvVvbfAQWeAPpNX4LwDO1j2kktpjyctnFmhC1QFJ18G8PZLXWXQOUIuUlU+eQWR9XgDOyKXgAGTB1i2qT776tki+Ae2rr0zpzgO+px0TjdRzYBrQYnyUtazU22blEo4n1swk44AFEEt5JYLPxORwBWaG2IWNrA86aaE0qiE1ss9TnTbUVFUCuB3ZDkK1Z2/wlDyCi/WYaDUTKJaOv1DqH1TakeWU3sNQLyCPjtwW4BLzVq8ceEoHX2uZ61cFPIsjBVIMKv8d1Qtv8LG/JXkB69Rgii/eNTh17RJEjSbtG4jwwE7ijbV+W15cHkKfAi4RtUE62wKpIgnylbUSjwHovIJhM3WUOhEdNnpC/GW6Y7bkMscPT1BLdlpem8MfvMbUJ1Dm9v6xlS4C7GqWdwZOS7xPA9ghoe6JOJWG6FbAoAlLJ/tX0C5DpOVdWwT0BAAAAAElFTkSuQmCC" />
                                </defs>
                            </svg>

                        </NavIcon>
                        <NavText>
                            Through Management
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="company/teaLeafCategorizer">
                        <NavIcon>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="20" height="20" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_18_181" transform="scale(0.02)" />
                                    </pattern>
                                    <image id="image0_18_181" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjUlEQVR4nO3TOQ6AQAxDUd//0qZgKgSaVZAM/9WWwDhIAJCSX9L6PHXmKDKq9TI0mht+M4rcM4sUnFYnVXg255dQ5IJFVhn+0q25ZW9KkZNZpOC0OqnCsznvUiQKUyTYVF71j+hjpkjBIouZ0yocjCoec96lSDbevoiTNTRFgjGLBOPfLJKNti0CAMrgALy1hCWVoagqAAAAAElFTkSuQmCC" />
                                </defs>
                            </svg>
                        </NavIcon>
                        <NavText>
                            Tea Leaf Categorizer
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="company/teaGradePredictor">
                        <NavIcon>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="20" height="20" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_18_180" transform="scale(0.02)" />
                                    </pattern>
                                    <image id="image0_18_180" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE1ElEQVR4nNWZe4hVVRTGb+OrzCynspek9CClLMMSsSmNoteYUPSwAimCDEqtwArKf9Ie/tELoqfQQyHKHlRQlJTQkyhsrKYwgp4gUemgzlTa+It173dktzvnnnPvXediHwzM3Xfftde3zt7rrG/tSiUCMBG4HXgH+AHoB94FOiolAtgPWAD0AN8Bnc0aGge8CAySjnPcva+tOwN4ChiI1ruxGWOzgE0yYAZXAHOAI4E7Nf6Co/NjgIXAl2Tjq0aNnhRE41XgkOj7w4G/ge3AQS0S6AKeTol+FroaMZ5EZRUwJGPO65pzc5PRXwT00jieaWShD4GPgBF15lwgw98AexS0e6o5AvxB8xiwQBQmU8CpYcBGGZ9VZ14ncIPt7wJOfg8sAW6tk2AMC92IyMm7q2ZhVcp3p2lr5kV/B/AycG6SzoGhQaJJwxfeRI4CdsrZao63w28LkQ97L9wGHBrY2xO4Qts6DzO8ybwdPm5gSo4DfUB3+DIFjgUeAH6nOJ70JjI3ftzA+joOrLPkAOwNXKXE0gz67c3vSWQE8JuMT9fY9TlO9OjJtIrr3IjI8ftleIU+76uIlY313kQm6tBvA0ZrzGqldmCaN5n3ZfgafT6lDST6gMu9iVwp458EY/UKwFbwqQXMEoYrCTk9MjjAUzRm9ZQXNgEPAscFa1r2mwmc6U3mYS36UCCM+r2jT63otLHPyzr0x8uwPZmRGlvZhPObgcfMXuXf0e/SeFrJf7I3GYugYV5QczUa/WoQ9PuDgVuAb3N++4Q3kfky/F4w1lsg+pOD+R2274HnJd6KYFfq9yIyGtgq45M0dlO06E7VaHNDzQMcpjLeyvkEg8AbwMXAZfptFq51IyKHTN8b7tXn/YE/gV+A5cDRwdwhwPmS1CafE/wE3AGMD+YemPOE1nkTmS7DvyYR19jwYM54OfpzpE1eAWaHEptaw+MeBSIP7oc+SY2XRqryQun9WAF+be2nYO5wbac1OdspxuPeRKy1Y1gTjK2t40C14Sextrxg9NNg53MfTyKdUo4W+SM0ZtqdnAzWSPSzMN+NiBw3zW5YFhz6VjooRdHjTcTqINRtGRaRKxtTvckkbaA5Ebmy8ag3kcUy/FpQM1mGKhubvYmMBf7Sy25cxpveG1uBpa5E5PhqLbCk5EPfqwLTr6UaETlLC/2YvLGBZ52c36Ki0/dwZxDpUGfRcLbGTm+RwMfA1cCoaK1RwBnWdi2LjF3dGVYHh35Dg873mfoETkixP01Pxp6Qf88rKtF36OCPjTJaHj5Qc2OX4Aok74KUzqZ1dI4phYgWtlLdsFifD1B5nxV9i3Ba9Kfqu/4Ugfaf+WUQMd2BtlT1cgh4rkirh5rkXRS1mAZVHc8D9iqdQODM0EB/zNTYiWps35coykh0dev+ZHuK6JrQjsivlY7epvv52fpuadblUPD7CXLUHE5gRF4Czsu61/QmcVedQ7tMTg7qhTgmElKXAG9FomuDXbja1ird+ZQzUA8mY9/U/5ZxJpm2lyxOMKBLUyswC120ehOppwATWPfkosDhEJ9Z/ne9wGkGQRuoHrZoG20M0uwjbSkxvIlo7mRrTMQvud0C1LJT7taq7O6gdpDz0F35P4Bais2Cv9iplAg9GctOdmbsz/5v+5P4B/cgylFz6NJnAAAAAElFTkSuQmCC" />
                                </defs>
                            </svg>


                        </NavIcon>
                        <NavText className={styles.navigationTabText}>
                            Tea Grade Predictor
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="company/teaVitalityAdvisor">
                        <NavIcon>
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="20" height="24" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_18_169" transform="matrix(0.02 0 0 0.0166667 0 0.0833333)" />
                                    </pattern>
                                    <image id="image0_18_169" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADMElEQVR4nO3ZXagVVRjG8TlaqVGZICJY9AFFEJGCICJdeJdRFBSUQhhFXUgg3RV9gEmEooiKCVEXSUQZSQZhVhRWEEFSkFoXIqmBIsGx0lLqnF8seYVh3B8zc9xzHDj/m733zKz3mWetNet9Z+0sm6A7uAxL8T0+zNqmgcuxAofkaJUGFmO/CxlpjQZWY1Rn/m6FBpbrzXAbNDL80EfkeBs0sjSsfUQOtEEjw699RN5tg0aGdX1E7mmDRoZr09B2EXgNQ23QOAdmYCN+wz/4NmXdrHqG3jkIjYHSRBUwcJqoAgZOE1XAwGkkQzdBIxm6CRrJ0E3QSIZugkYydBM0lqGb4JLN0BNMMEGLwfV4HFtiVTkaWfk0jsS7w1Y8jGuySwncgpfxo2qcxJqUI8bbwAP4ukdpXZbDWDSeRoZdPNLUu6uH1pV4DK/jC3yHz/AOXsASTKlr5Ikuo/ERrsO9WIufS5r5HTMLGlPihapMpw1jE2bXMfN+h4BvdrjuDmzGH31uZkvh3fxz1fkTj1Y1sqjHvN+WAmJ6ofh7Bad69Oq5KYInjY1VVYwMFXczOnAG72Fhrt1N+LTL9bfHNamq7UYqGvfFcp4+u029lVXMpDlclk9yNzoUD+pI4Zr5cf65wvGUk17CXEzqsiBsLrT5r/S7Cm5TjbN4FpOjfdpk+zfOpeR5dRy/MXr+bJiaGsdnYhmex4Z46VoZcXZ10NtdZVT2qs7O1IvRflmsgOsKcZ/Cgvg+N6Zj6uWyHMGtVYw8ox57MC1irErboLmYV0VvD0XlcH7UynIKd5Y2EaLTo+Sow440zUJ4Xi7mG/gA62vEHE31XCUTOeEX1eet+NwbI7AwfqcSqA6v1jIRRq7ATzVER6JuOxG/78PH8ZDfjF8qxts05s2IWGnS5kCVKbAi2qaVR3RGeqC35zauyxSmoynZjslAwcwN+LKEcMr+9xees/yO4oO5cw9FYdmNA7j7opnICU9KgfF2/A2Q6p+/QjDVZ4+cX3oL7bbnbm5W4dysyD87ovrdFdMo6VyQIMcVPB0mTmZtBgvCyMGszWBOGDmWtRlMDSNnsraDb/BVU4L/A7LdRBO6MjUsAAAAAElFTkSuQmCC" />
                                </defs>
                            </svg>

                        </NavIcon>
                        <NavText>
                            Tea Vitality Advisor
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main
                className={styles.bodyView}
                style={{
                    marginLeft: (expand && (isLockedState === false)) ? 275 : 65
                }}>
                <div className="content">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/troughManagement" element={<ThroughManagement />} />
                        <Route path="/teaLeafCategorizer" element={<TeaLeafCategorizer />} />
                        <Route path="/teaGradePredictor" element={<TeaGradePredictor />} />
                        <Route path="/teaVitalityAdvisor" element={<TeaVitalityAdvisor />} />
                    </Routes>
                </div>
            </main>
        </>
    );
}

export default AdminPanel;
