'use client'
import { fetchOneProduct } from '@/lib/features/productsSlice'
import styles from './ProductView.module.scss'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Star from '@/shared/ui/Star'
import Link from 'next/link'

const ProductView = () => {

    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const dispatch = useAppDispatch()
    const { product } = useAppSelector((state) => state.products)

    const location = usePathname()
    let id = location?.split('/').pop()
    let idLocate = Number(id)

    const togglePlay = () => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        if (id) {
            dispatch(fetchOneProduct(id))
        }
        console.log(id)
    }, [id, dispatch])

    return (
        <section className={styles.productView}>
            <div className='container'>
                {product ? (
                    <div className={styles.productView__content}>
                        <div className={styles.productView__content__left}>
                            <ul className={styles.productView__content__left__tabsImage}>
                                {Array.from({ length: 5 }, (_, index) => {
                                    return (
                                        <li key={index}>
                                            <Image
                                                src={product.image}
                                                width={90}
                                                height={85}
                                                alt='product image'
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: 'bottom'
                                                }}
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                            <Image
                                src={product.image}
                                width={452}
                                height={452}
                                alt='product active image'
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'bottom'
                                }}
                            />
                        </div>
                        <div className={styles.productView__content__right}>
                            <div className={styles.productView__content__right__top}>
                                <h3>{product.type}</h3>
                                <h2>{product.title}</h2>
                                <div className={styles.productView__content__right__top__audioContainer}>
                                    <audio ref={audioRef} src={'/assets/audios/guitar.mp3'} preload='auto' />
                                    <button onClick={togglePlay}>
                                        {
                                            isPlaying ?
                                                <Image src={'/assets/images/pause.png'} width={32} height={32} alt='pause' /> :
                                                <Image src={'/assets/images/play.png'} width={32} height={32} alt='play' />
                                        }
                                    </button>
                                    <Image src={'/assets/images/audLines.svg'} width={366} height={32} alt='audio bar' />
                                </div>
                                <p>{product.description}</p>
                                <span>
                                    {
                                        product.stock >= 1 ? 'в наличии' : 'под заказ'
                                    }
                                </span>
                            </div>
                            <div className={styles.productView__content__right__bottom}>
                                <div className={styles.productView__content__right__bottom__top}>
                                    <div className={styles.productView__content__right__bottom__top__left}>
                                        <h3>₽{product.price}</h3>
                                        <h4>В рассрочку от {product.price / 10} ₽</h4>
                                        <button>В КОРЗИНУ</button>
                                    </div>
                                    <div className={styles.productView__content__right__bottom__top__right}>
                                        <div className={styles.productView__content__right__bottom__top__right__stars}>
                                            {
                                                Array.from({ length: Math.round(product.rate) }, (_, index) => {
                                                    return (
                                                        <Star key={index} />
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className={styles.productView__content__right__bottom__top__right__socials}>
                                            <Link href={'https://vk.com/guitar_lavka'}>
                                                <Image src={'/assets/images/socials-yellow/vk.svg'} width={22} height={22} alt='vk' />
                                            </Link>
                                            <Link href={'https://www.facebook.com/Guitarlavka/'}>
                                                <Image src={'/assets/images/socials-yellow/fb.svg'} width={22} height={22} alt='fb' />
                                            </Link>
                                            <Link href={'https://twitter.com/GuitarLavka'}>
                                                <Image src={'/assets/images/socials-yellow/twitter.svg'} width={22} height={22} alt='twitter' />
                                            </Link>
                                        </div>
                                        <button>КУПИТЬ В 1 КЛИК</button>
                                    </div>
                                </div>
                                <div className={styles.productView__content__right__bottom__bottom}>
                                    <Link href={`/Catalog/Detail/${idLocate - 1}`}>
                                        <button>
                                            <Image src={'/assets/images/prev.svg'} width={18} height={20} alt='prev button' />
                                            назад
                                        </button>
                                    </Link>
                                    <Link href={`/Catalog/Detail/${idLocate + 1}`}>
                                        <button>
                                            вперёд
                                            <Image src={'/assets/images/next.svg'} width={18} height={20} alt='next button' />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Загрузка...</p>
                )}
            </div>
        </section>
    )
}

export default ProductView
