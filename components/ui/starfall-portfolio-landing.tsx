import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { ThemeToggle } from './theme-toggle'

// --- TYPE DEFINITIONS FOR PROPS ---
interface NavLink {
    label: string
    href: string
}

export interface PortfolioPageProps {
    logo?: { initials: React.ReactNode; name: React.ReactNode }
    navLinks?: NavLink[]
    resume?: { label: string; onClick?: () => void }
    hero?: { titleLine1: React.ReactNode; titleLine2Gradient: React.ReactNode; subtitle: React.ReactNode }
    ctaButtons?: { primary: { label: string; onClick?: () => void }; secondary: { label: string; onClick?: () => void } }
    showAnimatedBackground?: boolean
}

// --- INTERNAL ANIMATED BACKGROUND COMPONENT ---
const AuroraBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!mountRef.current) return
        const currentMount = mountRef.current
        const scene = new THREE.Scene()
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.domElement.style.position = 'fixed'
        renderer.domElement.style.top = '0'
        renderer.domElement.style.left = '0'
        renderer.domElement.style.zIndex = '0'
        renderer.domElement.style.display = 'block'
        currentMount.appendChild(renderer.domElement)
        const material = new THREE.ShaderMaterial({
            uniforms: { iTime: { value: 0 }, iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) } },
            vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
            fragmentShader: `
                uniform float iTime; uniform vec2 iResolution;
                #define NUM_OCTAVES 3
                float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
                float noise(vec2 p){ vec2 ip=floor(p);vec2 u=fract(p);u=u*u*(3.0-2.0*u);float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);return res*res; }
                float fbm(vec2 x) { float v=0.0;float a=0.3;vec2 shift=vec2(100);mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.50));for(int i=0;i<NUM_OCTAVES;++i){v+=a*noise(x);x=rot*x*2.0+shift;a*=0.4;}return v;}
                void main() {
                    vec2 p=((gl_FragCoord.xy)-iResolution.xy*0.5)/iResolution.y*mat2(6.,-4.,4.,6.);vec4 o=vec4(0.);float f=2.+fbm(p+vec2(iTime*5.,0.))*.5;
                    for(float i=0.;i++<35.;){vec2 v=p+cos(i*i+(iTime+p.x*.08)*.025+i*vec2(13.,11.))*3.5;float tailNoise=fbm(v+vec2(iTime*.5,i))*.3*(1.-(i/35.));vec4 auroraColors=vec4(.1+.3*sin(i*.2+iTime*.4),.3+.5*cos(i*.3+iTime*.5),.7+.3*sin(i*.4+iTime*.3),1.);vec4 currentContribution=auroraColors*exp(sin(i*i+iTime*.8))/length(max(v,vec2(v.x*f*.015,v.y*1.5)));float thinnessFactor=smoothstep(0.,1.,i/35.)*.6;o+=currentContribution*(1.+tailNoise*.8)*thinnessFactor;}
                    o=tanh(pow(o/100.,vec4(1.6)));gl_FragColor=o*1.5;
                }`,
        })
        const geometry = new THREE.PlaneGeometry(2, 2)
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
        let animationFrameId: number
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate)
            material.uniforms.iTime.value += 0.016
            renderer.render(scene, camera)
        }
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight)
            material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', handleResize)
        animate()
        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', handleResize)
            if (currentMount.contains(renderer.domElement)) currentMount.removeChild(renderer.domElement)
            renderer.dispose()
            material.dispose()
            geometry.dispose()
        }
    }, [])
    return <div ref={mountRef} />
}

// --- DEFAULT DATA ---
const defaultData: Required<PortfolioPageProps> = {
    logo: { initials: 'MT', name: 'Meng To' },
    navLinks: [
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
    ],
    resume: { label: 'Resume', onClick: undefined },
    hero: {
        titleLine1: 'Creative Developer &',
        titleLine2Gradient: 'Digital Designer',
        subtitle:
            'I craft beautiful digital experiences through code and design. Specializing in modern web development, UI/UX design, and bringing innovative ideas to life.',
    },
    ctaButtons: { primary: { label: 'View My Work', onClick: undefined }, secondary: { label: 'Get In Touch', onClick: undefined } },
    showAnimatedBackground: true,
}

// --- MAIN CUSTOMIZABLE PORTFOLIO COMPONENT ---
const PortfolioPage: React.FC<PortfolioPageProps> = ({
    logo = defaultData.logo,
    navLinks = defaultData.navLinks,
    resume = defaultData.resume,
    hero = defaultData.hero,
    ctaButtons = defaultData.ctaButtons,
    showAnimatedBackground = true,
}) => {
    return (
        <div className='text-foreground geist-font'>
            <div className='relative'>
                <nav className='fixed top-0 left-0 right-0 w-full px-6 py-4 backdrop-blur-md bg-background/80 border-b border-border/50 z-50'>
                    <div className='max-w-7xl mx-auto flex justify-between items-center'>
                        <div className='flex items-center space-x-2'>
                            <div className='w-8 h-8 rounded-lg bg-border backdrop-blur-md border border-border flex items-center justify-center'>
                                <span className='geist-font text-sm font-bold text-foreground'>{logo.initials}</span>
                            </div>
                            <span className='geist-font text-lg font-medium text-foreground'>{logo.name}</span>
                        </div>
                        <div className='hidden md:flex items-center space-x-8'>
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className='text-muted-foreground hover:text-foreground transition-colors inter-font text-sm'
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <div className='flex items-center gap-3'>
                            <ThemeToggle />
                            <button
                                onClick={resume.onClick}
                                className='glass-button px-4 py-2 rounded-lg text-foreground text-sm font-medium inter-font'
                            >
                                {resume.label}
                            </button>
                        </div>
                    </div>
                </nav>
                <main id='about' className='w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 pt-32'>
                    <div className='max-w-6xl mx-auto text-center'>
                        <div className='float-animation'>
                            <h1 className='md:text-6xl lg:text-7xl leading-[1.1] geist-font text-5xl font-light text-foreground tracking-tight mb-4'>
                                {hero.titleLine1}
                                <span className='gradient-text block tracking-tight'>{hero.titleLine2Gradient}</span>
                            </h1>
                            <p className='md:text-xl max-w-3xl leading-relaxed inter-font text-lg font-light text-muted-foreground mx-auto'>
                                {hero.subtitle}
                            </p>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-8'>
                            <button
                                onClick={ctaButtons.primary.onClick}
                                className='primary-button px-6 py-3 text-foreground rounded-lg font-medium text-sm min-w-[160px]'
                            >
                                {ctaButtons.primary.label}
                            </button>
                            <button
                                onClick={ctaButtons.secondary.onClick}
                                className='glass-button min-w-[160px] inter-font text-sm font-medium text-foreground rounded-lg px-6 py-3'
                            >
                                {ctaButtons.secondary.label}
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export { PortfolioPage, AuroraBackground }
