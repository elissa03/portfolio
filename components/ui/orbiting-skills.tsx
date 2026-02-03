'use client'
import React, { useEffect, useState, memo } from 'react'

// --- Type Definitions ---
type IconType =
    | 'javascript'
    | 'typescript'
    | 'python'
    | 'react'
    | 'node'
    | 'mongodb'
    | 'mysql'
    | 'git'
    | 'firebase'
    | 'html'
    | 'css'
    | 'redux'
    | 'express'
    | 'storybook'
    | 'socketio'
    | 'bootstrap'
    | 'figma'

type GlowColor = 'cyan' | 'purple' | 'green' | 'orange'

interface SkillIconProps {
    type: IconType
}

interface SkillConfig {
    id: string
    orbitRadius: number
    size: number
    speed: number
    iconType: IconType
    phaseShift: number
    glowColor: GlowColor
    label: string
}

interface OrbitingSkillProps {
    config: SkillConfig
    angle: number
    scale?: number
}

interface GlowingOrbitPathProps {
    radius: number
    glowColor?: GlowColor
    animationDelay?: number
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
    javascript: {
        component: () => (
            <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
                <rect width='24' height='24' fill='#F7DF1E' />
                <path
                    d='M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z'
                    fill='#323330'
                />
            </svg>
        ),
        color: '#F7DF1E',
    },
    typescript: {
        component: () => (
            <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
                <rect width='24' height='24' fill='#3178C6' />
                <path
                    d='M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z'
                    fill='white'
                />
            </svg>
        ),
        color: '#3178C6',
    },
    python: {
        component: () => (
            <svg viewBox='0 0 128 128' className='w-full h-full'>
                <linearGradient
                    id='python-original-a'
                    gradientUnits='userSpaceOnUse'
                    x1='70.252'
                    y1='1237.476'
                    x2='170.659'
                    y2='1151.089'
                    gradientTransform='matrix(.563 0 0 -.568 -29.215 707.817)'
                >
                    <stop offset='0' stopColor='#5A9FD4' />
                    <stop offset='1' stopColor='#306998' />
                </linearGradient>
                <linearGradient
                    id='python-original-b'
                    gradientUnits='userSpaceOnUse'
                    x1='209.474'
                    y1='1098.811'
                    x2='173.62'
                    y2='1149.537'
                    gradientTransform='matrix(.563 0 0 -.568 -29.215 707.817)'
                >
                    <stop offset='0' stopColor='#FFD43B' />
                    <stop offset='1' stopColor='#FFE873' />
                </linearGradient>
                <path
                    fill='url(#python-original-a)'
                    d='M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z'
                    transform='translate(0 10.26)'
                />
                <path
                    fill='url(#python-original-b)'
                    d='M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z'
                    transform='translate(0 10.26)'
                />
                <radialGradient
                    id='python-original-c'
                    cx='1825.678'
                    cy='444.45'
                    r='26.743'
                    gradientTransform='matrix(0 -.24 -1.055 0 532.979 557.576)'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop offset='0' stopColor='#B8B8B8' stopOpacity='.498' />
                    <stop offset='1' stopColor='#7F7F7F' stopOpacity='0' />
                </radialGradient>
                <path
                    opacity='.444'
                    fill='url(#python-original-c)'
                    d='M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z'
                />
            </svg>
        ),
        color: '#3776AB',
    },
    react: {
        component: () => (
            <svg viewBox='0 0 24 24' fill='none' className='w-full h-full'>
                <g stroke='#61DAFB' strokeWidth='1' fill='none'>
                    <circle cx='12' cy='12' r='2.05' fill='#61DAFB' />
                    <ellipse cx='12' cy='12' rx='11' ry='4.2' />
                    <ellipse cx='12' cy='12' rx='11' ry='4.2' transform='rotate(60 12 12)' />
                    <ellipse cx='12' cy='12' rx='11' ry='4.2' transform='rotate(120 12 12)' />
                </g>
            </svg>
        ),
        color: '#61DAFB',
    },
    node: {
        component: () => (
            <svg viewBox='0 0 128 128' className='w-full h-full'>
                <path
                    fill='#83CD29'
                    d='M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z'
                />
            </svg>
        ),
        color: '#83CD29',
    },
    mongodb: {
        component: () => (
            <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
                <path
                    d='M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z'
                    fill='#47A248'
                />
            </svg>
        ),
        color: '#47A248',
    },
    mysql: {
        component: () => (
            <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
                <path
                    d='M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z'
                    fill='#00758F'
                />
            </svg>
        ),
        color: '#00758F',
    },
    git: {
        component: () => (
            <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
                <path
                    d='M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187'
                    fill='#F05032'
                />
            </svg>
        ),
        color: '#F05032',
    },
    firebase: {
        component: () => (
            <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
                <path
                    d='M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z'
                    fill='#FFA000'
                />
            </svg>
        ),
        color: '#FFA000',
    },
    html: {
        component: () => (
            <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
                <path
                    d='M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z'
                    fill='#E34F26'
                />
            </svg>
        ),
        color: '#E34F26',
    },
    css: {
        component: () => (
            <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
                <path
                    d='M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z'
                    fill='#1572B6'
                />
            </svg>
        ),
        color: '#1572B6',
    },
    redux: {
        component: () => (
            <svg viewBox='0 0 128 128' className='w-full h-full'>
                <path
                    fill='#764abc'
                    d='M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z'
                />
            </svg>
        ),
        color: '#764ABC',
    },
    express: {
        component: () => (
            <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
                <path
                    d='M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z'
                    fill='#FFFFFF'
                />
            </svg>
        ),
        color: '#000000',
    },
    storybook: {
        component: () => (
            <svg viewBox='0 0 128 128' fill='none' className='w-full h-full'>
                <path
                    d='M107.346 2.012l-6.914.431.539 14.377c.028.795-.889 1.259-1.514.766l-4.63-3.65-5.485 4.162a.934.934 0 01-1.498-.784l.617-14.123L19.873 7.48a6.264 6.264 0 00-5.87 6.488l3.86 102.838a6.264 6.264 0 005.98 6.023l83.612 3.754a6.273 6.273 0 004.609-1.73 6.255 6.255 0 001.936-4.526V8.264a6.258 6.258 0 00-1.975-4.566 6.257 6.257 0 00-4.679-1.686zm-41.46 21.187c16.308 0 25.214 8.723 25.214 25.319-2.204 1.713-18.62 2.88-18.62.443.346-9.3-3.817-9.707-6.13-9.707-2.198 0-5.899.662-5.899 5.644 0 12.288 31.69 11.625 31.69 36.424 0 13.95-11.335 21.655-25.791 21.655-14.92 0-27.957-6.036-26.485-26.963.578-2.457 19.545-1.873 19.545 0-.23 8.635 1.735 11.175 6.707 11.175 3.817 0 5.553-2.103 5.553-5.646 0-12.621-31.227-13.063-31.227-36.201 0-13.285 9.138-22.143 25.444-22.143z'
                    fill='#FF4785'
                />
            </svg>
        ),
        color: '#FF4785',
    },
    socketio: {
        component: () => (
            <svg viewBox='0 0 128 128' fill='currentColor' className='w-full h-full'>
                <g fill='#010101' fillRule='evenodd'>
                    <path
                        d='M63.951.001C28.696.001.001 28.696.001 63.951s28.695 63.95 63.95 63.95 63.95-28.695 63.95-63.95S99.206.001 63.95.001zm0 10.679c29.484 0 53.272 23.787 53.272 53.271 0 29.485-23.788 53.272-53.272 53.272-29.484 0-53.272-23.787-53.272-53.272 0-29.484 23.788-53.271 53.272-53.271z'
                        fillRule='nonzero'
                    />
                    <path d='M48.39 60.716c14.004-11.44 27.702-23.278 42.011-34.384-7.505 11.533-15.224 22.913-22.729 34.445-6.437.03-12.875.03-19.282-.061zM60.228 67.092c6.468 0 12.905 0 19.342.092-14.095 11.38-27.732 23.309-42.071 34.384 7.505-11.533 15.224-22.943 22.729-34.476z' />
                </g>
            </svg>
        ),
        color: '#010101',
    },
    figma: {
        component: () => (
            <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
                <path d='M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z' fill='#0ACF83' />
                <path d='M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z' fill='#A259FF' />
                <path d='M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z' fill='#F24E1E' />
                <path d='M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z' fill='#FF7262' />
                <path d='M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z' fill='#1ABCFE' />
            </svg>
        ),
        color: '#F24E1E',
    },
    bootstrap: {
        component: () => (
            <svg viewBox='0 0 128 128' className='w-full h-full'>
                <defs>
                    <linearGradient
                        id='bootstrap-a'
                        x1='76.079'
                        x2='523.48'
                        y1='10.798'
                        y2='365.95'
                        gradientTransform='translate(1.11 14.613) scale(.24566)'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop offset='0' stopColor='#9013fe' />
                        <stop offset='1' stopColor='#6610f2' />
                    </linearGradient>
                    <linearGradient
                        id='bootstrap-b'
                        x1='193.51'
                        x2='293.51'
                        y1='109.74'
                        y2='278.87'
                        gradientTransform='translate(0 52)'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop offset='0' stopColor='#fff' />
                        <stop offset='1' stopColor='#f1e5fc' />
                    </linearGradient>
                    <filter
                        id='bootstrap-c'
                        width='197'
                        height='249'
                        x='161.9'
                        y='135.46'
                        colorInterpolationFilters='sRGB'
                        filterUnits='userSpaceOnUse'
                    >
                        <feFlood floodOpacity='0' result='BackgroundImageFix' />
                        <feColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' />
                        <feOffset dy='4' />
                        <feGaussianBlur stdDeviation='8' />
                        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
                        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
                        <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
                    </filter>
                </defs>
                <path
                    fill='url(#bootstrap-a)'
                    d='M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z'
                />
                <path
                    fill='url(#bootstrap-b)'
                    d='M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z'
                    filter='url(#bootstrap-c)'
                    transform='translate(1.494 2.203) scale(.24566)'
                />
            </svg>
        ),
        color: '#7952B3',
    },
}

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
    const IconComponent = iconComponents[type]?.component
    return IconComponent ? <IconComponent /> : null
})
SkillIcon.displayName = 'SkillIcon'

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
    // Inner Orbit - Core Languages
    {
        id: 'javascript',
        orbitRadius: 100,
        size: 42,
        speed: 1,
        iconType: 'javascript',
        phaseShift: 0,
        glowColor: 'cyan',
        label: 'JavaScript',
    },
    {
        id: 'typescript',
        orbitRadius: 100,
        size: 42,
        speed: 1,
        iconType: 'typescript',
        phaseShift: (2 * Math.PI) / 3,
        glowColor: 'cyan',
        label: 'TypeScript',
    },
    {
        id: 'python',
        orbitRadius: 100,
        size: 42,
        speed: 1,
        iconType: 'python',
        phaseShift: (4 * Math.PI) / 3,
        glowColor: 'cyan',
        label: 'Python',
    },
    // Middle Orbit - Frontend
    {
        id: 'react',
        orbitRadius: 160,
        size: 46,
        speed: -0.7,
        iconType: 'react',
        phaseShift: 0,
        glowColor: 'purple',
        label: 'React',
    },
    {
        id: 'redux',
        orbitRadius: 160,
        size: 40,
        speed: -0.7,
        iconType: 'redux',
        phaseShift: (2 * Math.PI) / 5,
        glowColor: 'purple',
        label: 'Redux',
    },
    {
        id: 'html',
        orbitRadius: 160,
        size: 40,
        speed: -0.7,
        iconType: 'html',
        phaseShift: (4 * Math.PI) / 5,
        glowColor: 'purple',
        label: 'HTML5',
    },
    {
        id: 'css',
        orbitRadius: 160,
        size: 40,
        speed: -0.7,
        iconType: 'css',
        phaseShift: (6 * Math.PI) / 5,
        glowColor: 'purple',
        label: 'CSS3',
    },
    {
        id: 'storybook',
        orbitRadius: 160,
        size: 42,
        speed: -0.7,
        iconType: 'storybook',
        phaseShift: (8 * Math.PI) / 5,
        glowColor: 'purple',
        label: 'Storybook',
    },
    // Outer Orbit - Backend & Tools
    {
        id: 'node',
        orbitRadius: 220,
        size: 45,
        speed: 0.5,
        iconType: 'node',
        phaseShift: 0,
        glowColor: 'green',
        label: 'Node.js',
    },
    {
        id: 'express',
        orbitRadius: 220,
        size: 42,
        speed: 0.5,
        iconType: 'express',
        phaseShift: (2 * Math.PI) / 9,
        glowColor: 'green',
        label: 'Express.js',
    },
    {
        id: 'mongodb',
        orbitRadius: 220,
        size: 42,
        speed: 0.5,
        iconType: 'mongodb',
        phaseShift: (4 * Math.PI) / 9,
        glowColor: 'green',
        label: 'MongoDB',
    },
    {
        id: 'mysql',
        orbitRadius: 220,
        size: 42,
        speed: 0.5,
        iconType: 'mysql',
        phaseShift: (6 * Math.PI) / 9,
        glowColor: 'green',
        label: 'MySQL',
    },
    {
        id: 'socketio',
        orbitRadius: 220,
        size: 40,
        speed: 0.5,
        iconType: 'socketio',
        phaseShift: (8 * Math.PI) / 9,
        glowColor: 'green',
        label: 'Socket.io',
    },
    {
        id: 'git',
        orbitRadius: 220,
        size: 40,
        speed: 0.5,
        iconType: 'git',
        phaseShift: (10 * Math.PI) / 9,
        glowColor: 'orange',
        label: 'Git',
    },
    {
        id: 'firebase',
        orbitRadius: 220,
        size: 40,
        speed: 0.5,
        iconType: 'firebase',
        phaseShift: (12 * Math.PI) / 9,
        glowColor: 'orange',
        label: 'Firebase',
    },
    {
        id: 'bootstrap',
        orbitRadius: 220,
        size: 42,
        speed: 0.5,
        iconType: 'bootstrap',
        phaseShift: (14 * Math.PI) / 9,
        glowColor: 'purple',
        label: 'Bootstrap',
    },
    {
        id: 'figma',
        orbitRadius: 220,
        size: 42,
        speed: 0.5,
        iconType: 'figma',
        phaseShift: (16 * Math.PI) / 9,
        glowColor: 'orange',
        label: 'Figma',
    },
]

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle, scale = 1 }: OrbitingSkillProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const { orbitRadius, size, iconType, label } = config

    const x = Math.cos(angle) * orbitRadius * scale
    const y = Math.sin(angle) * orbitRadius * scale
    const scaledSize = size * scale

    const handleInteractionStart = () => setIsHovered(true)
    const handleInteractionEnd = () => setIsHovered(false)

    return (
        <div
            className='absolute will-change-transform'
            style={{
                width: `${scaledSize}px`,
                height: `${scaledSize}px`,
                left: '50%',
                top: '50%',
                transform: `translate3d(${x - scaledSize / 2}px, ${y - scaledSize / 2}px, 0)`,
                zIndex: isHovered ? 20 : 10,
                transition: 'width 0.3s ease-out, height 0.3s ease-out, z-index 0s',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transformStyle: 'preserve-3d',
                WebkitTransformStyle: 'preserve-3d',
            }}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
        >
            <div
                className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-[2px] md:backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-110 md:scale-125 shadow-2xl' : 'shadow-lg'}
        `}
                style={{
                    boxShadow: isHovered ? `0 0 20px ${iconComponents[iconType]?.color}40, 0 0 40px ${iconComponents[iconType]?.color}20` : undefined,
                }}
            >
                <SkillIcon type={iconType} />
                {isHovered && (
                    <div className='absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-[2px] md:backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none z-30'>
                        {label}
                    </div>
                )}
            </div>
        </div>
    )
})
OrbitingSkill.displayName = 'OrbitingSkill'

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
    const glowColors = {
        cyan: {
            primary: 'rgba(6, 182, 212, 0.3)',
            secondary: 'rgba(6, 182, 212, 0.15)',
            border: 'rgba(6, 182, 212, 0.25)',
        },
        purple: {
            primary: 'rgba(147, 51, 234, 0.3)',
            secondary: 'rgba(147, 51, 234, 0.15)',
            border: 'rgba(147, 51, 234, 0.25)',
        },
        green: {
            primary: 'rgba(34, 197, 94, 0.3)',
            secondary: 'rgba(34, 197, 94, 0.15)',
            border: 'rgba(34, 197, 94, 0.25)',
        },
        orange: {
            primary: 'rgba(249, 115, 22, 0.3)',
            secondary: 'rgba(249, 115, 22, 0.15)',
            border: 'rgba(249, 115, 22, 0.25)',
        },
    }

    const colors = glowColors[glowColor] || glowColors.cyan

    return (
        <div
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none will-change-transform'
            style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                animationDelay: `${animationDelay}s`,
            }}
        >
            {/* Glowing background - reduced blur on mobile */}
            <div
                className='absolute inset-0 rounded-full animate-pulse'
                style={{
                    background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
                    boxShadow: `0 0 40px ${colors.primary}, inset 0 0 40px ${colors.secondary}`,
                    animation: 'pulse 4s ease-in-out infinite',
                    animationDelay: `${animationDelay}s`,
                }}
            />

            {/* Static ring for depth */}
            <div
                className='absolute inset-0 rounded-full'
                style={{
                    border: `1px solid ${colors.border}`,
                    boxShadow: `inset 0 0 15px ${colors.secondary}`,
                }}
            />
        </div>
    )
})
GlowingOrbitPath.displayName = 'GlowingOrbitPath'

// --- Main Component ---
export default function OrbitingSkills() {
    const [time, setTime] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [scale, setScale] = useState(1)
    const [isMounted, setIsMounted] = useState(false)

    // Calculate responsive scale based on viewport
    useEffect(() => {
        setIsMounted(true)

        const updateScale = () => {
            const width = window.innerWidth
            if (width < 400) {
                setScale(0.6)
            } else if (width < 640) {
                setScale(0.7)
            } else if (width < 768) {
                setScale(0.8)
            } else {
                setScale(1)
            }
        }

        updateScale()

        let resizeTimer: NodeJS.Timeout
        const debouncedResize = () => {
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(updateScale, 150)
        }

        window.addEventListener('resize', debouncedResize)
        return () => {
            window.removeEventListener('resize', debouncedResize)
            clearTimeout(resizeTimer)
        }
    }, [])

    useEffect(() => {
        if (isPaused) return

        let animationFrameId: number
        let lastTime = performance.now()
        const targetFPS = 60
        const frameInterval = 1000 / targetFPS
        let frameDelta = 0

        const animate = (currentTime: number) => {
            animationFrameId = requestAnimationFrame(animate)

            const elapsed = currentTime - lastTime
            frameDelta += elapsed

            // Throttle updates to target FPS for consistent animation
            if (frameDelta >= frameInterval) {
                const deltaTime = frameDelta / 1000
                lastTime = currentTime
                frameDelta = frameDelta % frameInterval

                setTime((prevTime) => prevTime + deltaTime)
            }
        }

        animationFrameId = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrameId)
    }, [isPaused])

    const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
        { radius: 100, glowColor: 'cyan', delay: 0 },
        { radius: 160, glowColor: 'purple', delay: 1 },
        { radius: 220, glowColor: 'green', delay: 2 },
    ]

    const centerSize = 80 * scale
    const containerHeight = isMounted ? Math.min(550 * scale, window.innerWidth - 40) : 550

    // Prevent rendering glitchy state before mounting
    if (!isMounted) {
        return (
            <main className='w-full flex items-center justify-center overflow-hidden py-8 md:py-12'>
                <div className='relative w-full max-w-[550px] h-[550px] flex items-center justify-center'>
                    <div className='w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center animate-pulse' />
                </div>
            </main>
        )
    }

    return (
        <main className='w-full flex items-center justify-center overflow-hidden py-8 md:py-12'>
            <div
                className='relative w-full max-w-[550px] flex items-center justify-center touch-none select-none'
                style={{
                    height: `${containerHeight}px`,
                    maxHeight: '550px',
                    contain: 'layout style paint',
                    backfaceVisibility: 'hidden',
                    perspective: '1000px',
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                {/* Central "Code" Icon with enhanced glow */}
                <div
                    className='bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl will-change-transform'
                    style={{
                        width: `${centerSize}px`,
                        height: `${centerSize}px`,
                    }}
                >
                    <div className='absolute inset-0 rounded-full bg-cyan-500/20 md:bg-cyan-500/30 blur-lg md:blur-xl animate-pulse'></div>
                    <div
                        className='absolute inset-0 rounded-full bg-purple-500/15 md:bg-purple-500/20 blur-xl md:blur-2xl animate-pulse'
                        style={{ animationDelay: '1s' }}
                    ></div>
                    <div className='relative z-10'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={36 * scale}
                            height={36 * scale}
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='url(#gradient)'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <defs>
                                <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                                    <stop offset='0%' stopColor='#06B6D4' />
                                    <stop offset='100%' stopColor='#9333EA' />
                                </linearGradient>
                            </defs>
                            <polyline points='16 18 22 12 16 6'></polyline>
                            <polyline points='8 6 2 12 8 18'></polyline>
                        </svg>
                    </div>
                </div>

                {/* Render glowing orbit paths */}
                {orbitConfigs.map((config) => (
                    <GlowingOrbitPath
                        key={`path-${config.radius}`}
                        radius={config.radius * scale}
                        glowColor={config.glowColor}
                        animationDelay={config.delay}
                    />
                ))}

                {/* Render orbiting skill icons */}
                {skillsConfig.map((config) => {
                    const angle = time * config.speed + (config.phaseShift || 0)
                    return <OrbitingSkill key={config.id} config={config} angle={angle} scale={scale} />
                })}
            </div>
        </main>
    )
}
