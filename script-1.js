;
(function () {
    const O = document.querySelector('script#packtypebot-whatsapp'), Q = O.getAttribute('data-secret-key'), k = 'templatepacktypebot';
    if (Q === k) {
        j();
    } else {
        console.error('Chave secreta inválida!');
    }
    function j() {
        ;
        if (!document.querySelector('script#packtypebot-whatsapp').classList.contains('pre-loaded')) {
            document.querySelector('script#packtypebot-whatsapp').classList.add('pre-loaded');
            let B = false;
            const L = document.currentScript.getAttribute('data-language'), v = document.currentScript.getAttribute('data-profile-name'), f = L ? L : 'pt', C = v ? v : 'Pack Typebot', i = async m => {
                    ;
                    while (document.querySelector(m) === null) {
                        await new Promise(U => requestAnimationFrame(U));
                    }
                    return document.querySelector(m);
                }, a = async (m, w) => {
                    ;
                    ;
                    ;
                    ;
                    while (document.querySelector(m).shadowRoot.querySelector(w) === null) {
                        await new Promise(P => requestAnimationFrame(P));
                    }
                    return document.querySelector(m).shadowRoot.querySelector(w);
                }, G = m => {
                    ;
                    if (!window.matchMedia) {
                        return;
                    }
                    const U = window.matchMedia('(prefers-color-scheme: dark)');
                    m(U.matches);
                    U.addEventListener('change', n => m(n.matches));
                }, z = (m, w) => {
                    ;
                    const U = document.createElement('link');
                    U.type = 'text/css';
                    U.rel = 'stylesheet';
                    U.id = 'packtypebot-style';
                    U.href = w;
                    m.insertAdjacentElement('beforebegin', U);
                }, J = (m, w) => {
                    ;
                    return new Promise((n, P) => {
                        ;
                        let K = false, F = false;
                        const M = () => {
                                ;
                                K && F && n();
                            }, D = document.createElement('link');
                        D.rel = 'preload';
                        D.href = m;
                        D.as = 'style';
                        D.onload = () => {
                            ;
                            K = true;
                            M();
                        };
                        D.onerror = P;
                        document.head.appendChild(D);
                        const l = document.createElement('link');
                        l.rel = 'preload';
                        l.href = w;
                        l.as = 'image';
                        l.onload = () => {
                            ;
                            F = true, M();
                        };
                        l.onerror = P;
                        document.head.appendChild(l);
                    });
                }, s = document.body.querySelector('typebot-standard'), Y = s.parentNode, c = document.body.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-avatar-container figure img'), W = c ? c.src : '//cdn.jsdelivr.net/gh/packtypebot/template/default-profile.png';
            s.remove();
            J('//cdn.jsdelivr.net/gh/packtypebot/template/style.css', W).then(() => {
                ;
                G(w => {
                    ;
                    B = true;
                    i('typebot-standard').then(n => {
                        ;
                        a('typebot-standard', '.typebot-container').then(P => {
                            ;
                            z(P, '//cdn.jsdelivr.net/gh/packtypebot/template/style.css');
                            w ? (document.querySelector('html').classList.add('dark'), P.classList.add('dark')) : (document.querySelector('html').classList.remove('dark'), P.classList.remove('dark'));
                            document.querySelector('html').classList.add('styled');
                        });
                    });
                });
            });
            const u = setInterval(() => {
                    ;
                    B && (Y.appendChild(s), clearInterval(u));
                }, 200), Z = S => {
                    const E0 = {
                        id: 'top-bar',
                        classList: [
                            'absolute',
                            'z-20',
                            'top-0',
                            'flex',
                            'h-[70px]',
                            'w-screen',
                            'justify-between',
                            'border-b',
                            'bg-[#008069]',
                            'px-2',
                            'py-3',
                            'dark:border-[#8696a00a]',
                            'dark:bg-[#202c33]',
                            'dark:shadow-[0_1px_3px_rgba(11,20,26,0.4)]'
                        ]
                    };
                    ;
                    ;
                    const E1 = E0, E2 = I('div', E1), E3 = {
                            id: 'left-area',
                            classList: [
                                'flex',
                                'items-center'
                            ]
                        };
                    ;
                    ;
                    const E4 = E3, E5 = I('div', E4), E6 = {
                            id: 'back-button',
                            classList: [
                                'h-7',
                                'w-7',
                                'cursor-pointer'
                            ]
                        };
                    ;
                    ;
                    const E7 = E6, E8 = I('div', E7), E9 = {
                            xmlns: 'http://www.w3.org/2000/svg',
                            viewBox: '0 0 72 72'
                        };
                    ;
                    ;
                    const EE = E9, Et = I('svg', EE);
                    Et.innerHTML = '<path class="dark:fill-[#e9edef]" fill=#fff fill-opacity=.996 d="m24.46 33.03 31.2-.03q2.8-.01 4.18 2.42.37.64.11 1.25-.99 2.34-3.43 2.34-17.48-.03-31.81 0-1.12 0-.33.79l13.26 13.27q1.84 1.84.82 4.23-.34.8-1.13 1.05-2.29.7-3.97-.99L14.63 38.64q-2.61-2.62 0-5.24l18.8-18.84q1.69-1.69 3.95-.88 1.49.54 1.43 3.09a2.44 2.43 67.9 0 1-.7 1.66L24.2 32.42a.36.36 0 0 0 .26.61Z"/>';
                    const EX = {
                        id: 'profile-image',
                        classList: ['cursor-pointer']
                    };
                    ;
                    ;
                    const EO = EX, EQ = I('div', EO), Ek = {
                            src: W,
                            classList: [
                                'h-9',
                                'w-9',
                                'rounded-full'
                            ]
                        };
                    ;
                    ;
                    const Ej = Ek, Eq = I('img', Ej), Ey = {
                            id: 'text-profile',
                            classList: [
                                'ml-3',
                                'flex',
                                'flex-col',
                                'gap-2',
                                'leading-none',
                                'text-white',
                                'dark:text-[#e9edef]',
                                'relative'
                            ]
                        };
                    ;
                    ;
                    const Er = Ey, EB = I('div', Er), EL = {
                            id: 'name',
                            classList: [
                                'cursor-pointer',
                                'text-lg',
                                'font-semibold',
                                'leading-none',
                                'relative',
                                'w-fit'
                            ],
                            textContent: C
                        };
                    ;
                    ;
                    ;
                    const Ev = EL, Ef = I('div', Ev), EC = {
                            id: 'status',
                            classList: [
                                'text-sm',
                                'font-normal',
                                'leading-none'
                            ],
                            textContent: 'online'
                        };
                    ;
                    ;
                    ;
                    const Ei = EC, Ea = I('div', Ei), EG = {
                            id: 'right-area',
                            classList: [
                                'flex',
                                'items-center',
                                'gap-6'
                            ]
                        };
                    ;
                    ;
                    const Ez = EG, EJ = I('div', Ez), Es = {
                            id: 'camera',
                            classList: [
                                'h-6',
                                'w-6',
                                'cursor-pointer',
                                'hidden',
                                'xs:block'
                            ]
                        };
                    ;
                    ;
                    const EY = Es, Ec = I('div', EY), EW = {
                            xmlns: 'http://www.w3.org/2000/svg',
                            viewBox: '0 0 36 36'
                        };
                    ;
                    ;
                    const Eu = EW, EZ = I('svg', Eu);
                    EZ.innerHTML = '<path class="dark:fill-[#e9edef]" fill=#fff d="m27.02 21.27-.04 5.74a3.01 3-89.8 0 1-3 2.99H6.02a3 2.99 0 0 1-3-2.99L3.01 9.48q0-3.42 3.42-3.46 8.94-.08 17.25.02 3.25.04 3.29 3.34.03 2.85.08 5.76a.26.25-23.7 0 0 .44.17l4.27-4.32a.72.72 0 0 1 1.23.51L33 23.68q0 2.59-1.82.74l-3.41-3.46q-.74-.75-.75.31Z"/>';
                    const EI = {
                        id: 'cellphone',
                        classList: [
                            'h-6',
                            'w-6',
                            'cursor-pointer',
                            'hidden',
                            'xs:block'
                        ]
                    };
                    ;
                    ;
                    const EV = EI, Ep = I('div', EV), Em = {
                            xmlns: 'http://www.w3.org/2000/svg',
                            viewBox: '0 0 72 72'
                        };
                    ;
                    ;
                    const Ew = Em, EU = I('svg', Ew);
                    EU.innerHTML = '<path class="dark:fill-[#e9edef]" fill=#fff style="stroke-width:0" d="M40 51.8c3-3 5.7-7.2 10.5-6.8 2.7.2 5.2.6 7.5.9 3 .5 4.6 2.3 4.9 5.4.5 4.9.5 12.4-7 11.6-25.4-2.6-43.9-21-46.8-46.5-.5-4 1.8-7.2 6-7.4 4.7-.2 10-.6 11.1 5.4.6 3.3.8 6.3.8 8.9 0 2.9-4.9 6.9-6.9 8.8-.1.1-.2.3 0 .5 4.3 8.2 10.6 14.6 19 19.2.4.2.7.1 1-.2Z" />';
                    const En = {
                        id: 'more',
                        classList: [
                            'h-6',
                            'w-6',
                            'cursor-pointer'
                        ]
                    };
                    ;
                    ;
                    const ET = I('div', EP), EK = {
                            xmlns: 'http://www.w3.org/2000/svg',
                            viewBox: '0 0 72 72'
                        };
                    ;
                    ;
                    const EF = EK, EN = I('svg', EF);
                    EN.innerHTML = '<circle cx="36" cy="53.9" r="6" class="dark:fill-[#e9edef]" fill=#fff /> <circle cx="36" cy="35.9" r="6" class="dark:fill-[#e9edef]" fill=#fff /> <circle cx="36" cy="17.9" r="6" class="dark:fill-[#e9edef]" fill=#fff />';
                    E8.appendChild(Et);
                    EQ.appendChild(Eq);
                    EB.appendChild(Ef);
                    EB.appendChild(Ea);
                    Ec.appendChild(EZ);
                    Ep.appendChild(EU);
                    ET.appendChild(EN);
                    E5.appendChild(E8);
                    E5.appendChild(EQ);
                    E5.appendChild(EB);
                    EJ.appendChild(Ec);
                    EJ.appendChild(Ep);
                    EJ.appendChild(ET);
                    E2.appendChild(E5);
                    E2.appendChild(EJ);
                    S.insertAdjacentElement('afterbegin', E2);
                    const EM = document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container .typebot-chat-view'), ED = {
                            classList: [
                                'chat-start-info',
                                'w-full',
                                'flex',
                                'flex-col',
                                'items-center',
                                'px-5',
                                'py-5',
                                'gap-4'
                            ]
                        };
                    ;
                    const El = ED, Ed = I('div', El), Eb = f === 'pt' ? 'Hoje' : f === 'es' ? 'Hoy' : 'Today', Eg = {
                            classList: [
                                'bg-[#f8f7f7]',
                                'dark:bg-[#1c272d]',
                                'py-1',
                                'px-3',
                                'rounded-md',
                                'w-min',
                                'text-[#54656f]',
                                'dark:text-[#8696a0]',
                                'shadow-[0_1px_0.5px_rgba(11,20,26,0.08)]'
                            ],
                            textContent: Eb
                        };
                    ;
                    ;
                    const ER = Eg, EH = I('div', ER), Eh = {
                            classList: [
                                'py-1.5',
                                'px-3',
                                'rounded-md',
                                'bg-[#cbf2ee]',
                                'dark:bg-[#1c272d]',
                                'p-4',
                                'text-center',
                                'leading-tight',
                                'shadow-[0_1px_0.5px_rgba(11,20,26,0.08)]'
                            ]
                        };
                    ;
                    const Ex = Eh, EA = I('div', Ex), Ee = {
                            classList: [
                                'inline-flex',
                                'w-3.5',
                                'h-3.5',
                                'align-top',
                                'mt-1'
                            ],
                            style: 'margin-right: 0.2rem'
                        };
                    ;
                    ;
                    const Eo = Ee, ES = I('span', Eo), t0 = {
                            xmlns: 'http://www.w3.org/2000/svg',
                            viewBox: '0 0 11 11'
                        };
                    ;
                    ;
                    const t1 = t0, t2 = I('svg', t1);
                    t2.innerHTML = '<path class="dark:fill-[#5faca7]" fill=#54656f d="M5 0a5 5 0 1 1 0 10A5 5 0 0 1 5 0Zm-.027 4.118a.649.649 0 0 0-.649.648v2.757a.649.649 0 0 0 1.298 0V4.766a.649.649 0 0 0-.649-.648ZM5 1.892c-.227 0-.406.069-.538.206a.73.73 0 0 0-.197.527c0 .216.067.393.202.53A.712.712 0 0 0 5 3.363c.22 0 .399-.068.533-.206a.728.728 0 0 0 .202-.531.726.726 0 0 0-.2-.527c-.133-.137-.311-.206-.535-.206Z" />';
                    const t3 = f === 'pt' ? 'Esta empresa usa um servico comercial seguro da Meta para gerenciar esta conversa. Clique para saber mais.' : f === 'es' ? 'Esta empresa usa un servicio seguro de Meta para administrar este chat. Toca para obtener mas informacion.' : 'This business uses a secure service from Meta to manage this chat. Tap to learn more.', t4 = {
                            classList: [
                                'text-[#54656f]',
                                'dark:text-[#5faca7]',
                                'align-top',
                                'text-sm'
                            ],
                            textContent: t3
                        };
                    ;
                    ;
                    const t5 = t4, t6 = I('span', t5);
                    ES.appendChild(t2);
                    EA.appendChild(ES);
                    EA.appendChild(t6);
                    Ed.appendChild(EH);
                    Ed.appendChild(EA);
                    EM.insertAdjacentElement('afterbegin', Ed);
                }, I = (m, w) => {
                    const U = m === 'svg' ? document.createElementNS('http://www.w3.org/2000/svg', m) : document.createElement(m);
                    for (const [n, P] of Object.entries(w)) {
                        if (n === 'classList') {
                            U.classList.add(...P);
                        } else {
                            if (n === 'textContent') {
                                U.textContent = P;
                            } else {
                                n === 'style' ? U.style.cssText = P : U.setAttribute(n, P);
                            }
                        }
                    }
                    return U;
                };
            function V(m, w) {
                const U = m === 'svg' ? document.createElementNS('http://www.w3.org/2000/svg', m) : document.createElement(m);
                for (const [n, P] of Object.entries(w)) {
                    if (n === 'classList') {
                        U.classList.add(...P);
                    } else {
                        n === 'textContent' ? U.textContent = P : U.setAttribute(n, P);
                    }
                }
                return U;
            }
            const p = () => {
                ;
                let w = 0, U = 0;
                const n = document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container'), P = n.querySelector('#top-bar #status'), K = document.createElement('audio');
                K.src = '//cdn.jsdelivr.net/gh/packtypebot/template/audio-notify-alert.mp3';
                setInterval(() => {
                    const E1 = n.querySelector('.bubble1'), E2 = E1?.parentElement?.parentElement?.nextSibling;
                    if (E1 && E2 && E2.src) {
                        const E5 = f == 'pt' ? 'gravando áudio...' : f == 'es' ? 'grabando audio...' : 'recording audio...';
                        P.innerText = E5;
                    } else {
                        if (E1) {
                            const E7 = f == 'pt' ? 'digitando...' : f == 'es' ? 'escribiendo...' : 'typing...';
                            P.innerText = E7;
                        } else {
                            P.innerText = 'online';
                        }
                    }
                    const E3 = n.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');
                    if (E3.length > w) {
                        for (let EE = w; EE < E3.length; EE++) {
                            let Et = new Date(), EX = (Et.getHours() < 10 ? '0' : '') + Et.getHours() + ':' + (Et.getMinutes() < 10 ? '0' : '') + Et.getMinutes(), EO = E3[EE], EQ = EO.querySelector('.bubble-typing + figure');
                            if (EQ) {
                                const Ej = {
                                    classList: [
                                        'absolute',
                                        'bottom-2.5',
                                        'right-4',
                                        'inline-flex',
                                        'items-center',
                                        'gap-1'
                                    ]
                                };
                                ;
                                const Eq = Ej;
                                let Ey = V('span', Eq);
                                const Er = {
                                    classList: [
                                        'text-xs',
                                        'text-[rgba(233,237,239,.9)]'
                                    ],
                                    textContent: EX
                                };
                                ;
                                ;
                                const EB = Er;
                                let EL = V('div', EB);
                                Ey.appendChild(EL);
                                const Ev = {
                                    classList: [
                                        'absolute',
                                        'inline-flex',
                                        'h-10',
                                        'w-[calc(100%-16px)]',
                                        'bg-gradient-to-t',
                                        'from-[rgba(11,20,26,.5)]',
                                        'to-[rgba(11,20,26,0)]',
                                        'bottom-2',
                                        'items-center',
                                        'flex',
                                        'p-2',
                                        'rounded-b-md'
                                    ]
                                };
                                ;
                                Ev['aria-hidden'] = 'true';
                                const Ef = Ev;
                                let EC = V('span', Ef), Ei = document.createElement('span');
                                Ei.appendChild(EC);
                                Ei.appendChild(Ey);
                                EQ.appendChild(Ei);
                            } else {
                                let Ea = EO.querySelector('audio');
                                if (Ea) {
                                    let EG = window.innerWidth, Ez = 130;
                                    if (EG >= 320 && EG < 375) {
                                        Ez = 150;
                                    } else {
                                        if (EG >= 375 && EG < 425) {
                                            Ez = 170;
                                        } else {
                                            if (EG >= 425) {
                                                Ez = 190;
                                            }
                                        }
                                    }
                                } else {
                                    let EY = EO.querySelector('div > div[data-element-type="p"] > span');
                                    const Ec = {
                                        classList: [
                                            'absolute',
                                            '-bottom-0.5',
                                            'right-0',
                                            'inline-flex',
                                            'items-center',
                                            'gap-1'
                                        ]
                                    };
                                    ;
                                    const EW = Ec;
                                    let Eu = V('span', EW);
                                    const EZ = {
                                        classList: [
                                            'text-xs',
                                            'text-[#667781]',
                                            'dark:text-[#99beb7]'
                                        ],
                                        textContent: EX
                                    };
                                    ;
                                    ;
                                    const EI = EZ;
                                    let EV = V('div', EI);
                                    Eu.appendChild(EV);
                                    const Ep = {
                                        classList: [
                                            'invisible',
                                            'inline-flex',
                                            'w-10',
                                            'bg-white',
                                            'p-2'
                                        ]
                                    };
                                    ;
                                    Ep['aria-hidden'] = 'true';
                                    const Em = Ep;
                                    let Ew = V('span', Em), EU = document.createElement('span');
                                    EU.appendChild(Ew);
                                    EU.appendChild(Eu);
                                    EY.appendChild(EU);
                                }
                            }
                        }
                        w = E3.length;
                        K.play();
                    }
                    const E4 = n.querySelector('.typebot-chat-view').querySelectorAll('.typebot-guest-bubble');
                    if (E4.length > U) {
                        for (;; En < E4.length; En++) {
                            let EP = new Date();
                            const ET = (EP.getHours() < 10 ? '0' : '') + EP.getHours() + ':' + (EP.getMinutes() < 10 ? '0' : '') + EP.getMinutes(), EK = E4[En], EF = {
                                    classList: [
                                        'absolute',
                                        'bottom-1.5',
                                        'right-2',
                                        'inline-flex',
                                        'items-center',
                                        'gap-1'
                                    ]
                                };
                            ;
                            const EN = EF;
                            let EM = V('span', EN);
                            const ED = {
                                classList: [
                                    'text-xs',
                                    'text-[#667781]',
                                    'dark:text-[#99beb7]'
                                ],
                                textContent: ET
                            };
                            ;
                            ;
                            const El = ED;
                            let Ed = V('span', El);
                            EM.appendChild(Ed);
                            const Eb = {
                                classList: [
                                    'h-2',
                                    'w-4'
                                ]
                            };
                            ;
                            const Eg = Eb;
                            let ER = V('span', Eg);
                            const EH = {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 16 11'
                            };
                            ;
                            ;
                            const Eh = EH;
                            let Ex = V('svg', Eh);
                            Ex.innerHTML = '<path class="dark:fill-[#53bcea]" fill=#009de2 d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.146.47.47 0 0 0-.343.146l-.311.31a.445.445 0 0 0-.14.337c0 .136.047.25.14.343l2.996 2.996a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.19-.374L11.07.653Zm-2.45 7.674a15.31 15.31 0 0 1-.546-.355.43.43 0 0 0-.317-.12.46.46 0 0 0-.362.158l-.292.33a.482.482 0 0 0 .013.666l1.079 1.073c.135.135.3.203.495.203a.699.699 0 0 0 .552-.267l6.62-8.391a.446.446 0 0 0 .109-.298.487.487 0 0 0-.178-.375l-.355-.273a.487.487 0 0 0-.673.076L8.62 8.327Z" />';
                            ER.appendChild(Ex);
                            EM.appendChild(ER);
                            const EA = {
                                classList: [
                                    'invisible',
                                    'inline-flex',
                                    'w-14',
                                    'bg-white',
                                    'p-2'
                                ]
                            };
                            ;
                            EA['aria-hidden'] = 'true';
                            const Ee = EA;
                            let Eo = V('span', Ee), ES = document.createElement('span');
                            ES.appendChild(Eo);
                            ES.appendChild(EM);
                            EK.appendChild(ES);
                        }
                        U = E4.length;
                    }
                }, 200);
            };
            i('typebot-standard').then(m => {
                ;
                a('typebot-standard', '.typebot-container').then(U => {
                    ;
                    Z(U);
                    p(U);
                });
                document.querySelector('html').classList.add('loaded');
            });
        }
    }
}());
;