import { FunctionComponent } from 'react'

import { Layout } from '../../components'
import CompareHero from '../../components/Compare/CompareHero'
import { CompareTables } from '../../components/Compare/CompareTables'
import { cursorVsCody } from '../../components/Compare/constants'
import { DemoComparisons } from '../../components/Compare/DemoComparisons'
import { CodyCallToActionContentSection } from '../../components/cta/CodyCallToActionContentSection'
import { useAuthModal } from '../../context/AuthModalContext'
import { captureCustomEventWithPageData } from '../../lib/utils'

const CursorVsCodyPage: FunctionComponent = () => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (pagePosition: string): void => {
        captureCustomEventWithPageData('get_cody_onpage_click', pagePosition)
        openModal('cursor-vs-cody')
    }

    return (
        <Layout
            meta={{
                title: 'Sourcegraph Cody vs Cursor',
                description: 'Feature comparison of Sourcegraph Cody and Cursor',
            }}
            hero={
                <CompareHero
                    title="Sourcegraph Cody vs Cursor"
                    titleClassName="lg:text-[72px] text-5xl lg:leading-[86px] w-full font-sans max-w-[671px] font-semibold mt-2"
                    simpleStyle={true}
                    competitorDescription="Cursor Logo"
                    competitorIcon="/assets/compare/cursor.svg"
                    containerClassName="xl:pt-[121px]"
                >
                    <h3 className="mt-[-15px] mb-0 pb-[5px] lg:w-[671px]">
                        Cody is a better option for users who want LLM choice or who want their code AI to work within
                        their IDE of choice.
                    </h3>

                    <button
                        type="button"
                        className="btn btn-secondary mt-0 min-w-[204px] px-6 py-2"
                        title="Get Cody for free"
                        onClick={() => handleOpenModal('top')}
                    >
                        <div className="flex items-center justify-center leading-6 tracking-[-0.25px]">
                            <img src="/cody/cody-logo.svg" className="mr-2 h-[24px] w-[24px]" alt="Cody Logo" /> Get
                            Cody for free
                        </div>
                    </button>
                </CompareHero>
            }
        >
            <CompareTables compareData={cursorVsCody} demoStyle={true} />

            <CodyCallToActionContentSection
                title="Get Cody, the AI coding assistant"
                description="Cody makes it easy to write, fix, and maintain code."
                cta1={{ text: 'Try Cody for free', ctaStyle: 'primaryButtonWhite', link: '/cody' }}
                cta2={{ text: 'See enterprise pricing', ctaStyle: 'link', link: '/cody/pricing' }}
                smallCta={true}
            />

            <DemoComparisons />
        </Layout>
    )
}

export default CursorVsCodyPage
