import { FunctionComponent } from 'react'

import Link from 'next/link'

import { ContentSection } from '..'
import { buttonStyle, buttonLocation } from '../../data/tracking'

interface RequestDemoCtaProps {
    onClickContactUs?: () => void
}

export const RequestDemoCta: FunctionComponent<RequestDemoCtaProps> = ({ onClickContactUs }) => (
    <ContentSection
        className="flex max-w-[1232px] flex-col justify-between rounded-2xl border-1 border-gray-200  bg-violet-700 py-16 px-[56px] md:flex-row"
        parentClassName="md:px-[80px] !py-0 md:!pb-[96px] !pb-[64px]"
    >
        <h2 className="mb-8 text-white md:mb-0">Start a free, 30-day Cody Enterprise trial</h2>
        <div className="flex max-w-[356px] flex-col flex-wrap items-center gap-6 sm:flex-row md:gap-4">
            {onClickContactUs ? (
                <button
                    className="btn btn-primary-dark w-full md:w-auto"
                    title="Start your free trial"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation}
                    data-button-type="cta"
                    onClick={onClickContactUs}
                    type="button"
                >
                    Start your free trial
                </button>
            ) : (
                <Link
                    className="btn btn-primary-dark w-full text-center md:w-auto"
                    href="/enterprise-trial-offer"
                    title="Start your free trial"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation}
                    data-button-type="cta"
                >
                    Start your free trial
                </Link>
            )}

            <Link
                className="btn btn-secondary-dark w-full items-center text-center md:w-auto"
                href="/pricing"
                title="See Pricing"
                data-button-style={buttonStyle.outline}
                data-button-location={buttonLocation.hero}
                data-button-type="cta"
            >
                See pricing
            </Link>
        </div>
    </ContentSection>
)
