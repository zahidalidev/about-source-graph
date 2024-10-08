import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection, InfiniteCarousel } from '..'

export const carouselImages = [
    { src: '/enterprise/cern-logo.svg', className: 'h-[48px] w-[78px] mx-[21px]' },
    { src: '/enterprise/mercado-libre-logo.svg', className: 'h-[48px] w-[99px] mx-[21px]' },
    { src: '/enterprise/sofi-logo-violet.svg', className: 'h-[48px] w-[85px] mx-[21px]' },
    { src: '/home/carousel/qualtrics-logo.svg', className: 'h-[48px] w-[125px] mx-[21px]' },
    { src: '/assets/icons/leidos-light.svg', className: 'h-[48px] w-[114px] mx-[21px]' },
    { src: '/home/carousel/palo-alto-logo.svg', className: ' h-[48px] w-[166px] mx-[21px]' },
    { src: '/assets/icons/uber-logo.svg', className: ' h-[48px] w-[72px] mx-[21px]' },
    { src: '/assets/icons/nutanix-logo.svg', className: ' h-[48px] w-[150px] mx-[21px]' },
]
export const CompanyUsingCodySection: FunctionComponent = () => (
    <div className="relative mx-auto mt-0 flex flex-col items-center gap-12 py-16 text-center md:mt-[-135px] md:pt-[282px] md:pb-24">
        <ContentSection parentClassName="!py-0 md:px-20">
            <div className="z-10 flex flex-col items-center gap-6 text-center md:w-[615px]">
                <h2>Used by 6 of the 10 largest software companies in the world</h2>
                <Link
                    href="https://sourcegraph.com/case-studies"
                    title="Cody"
                    className="btn btn-link btn-link-icon p-0 text-center font-semibold !-tracking-[0.25px]"
                >
                    Read customer stories
                    <ChevronRightIcon className="link-icon" />
                </Link>
            </div>
        </ContentSection>
        <div className="relative w-full max-w-[1232px] overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-gray-50 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-gray-50 to-transparent" />
            <InfiniteCarousel images={carouselImages} duration={300} />
        </div>
    </div>
)
