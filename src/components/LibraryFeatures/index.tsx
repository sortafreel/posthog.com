import React from 'react'
import CheckIcon from '../../images/check.svg'
import MinusIcon from '../../images/x.svg'
import InfoIcon from '../InfoIcon/Index'
import Link from 'components/Link'

const features = [
    { key: 'eventCapture', name: 'Event capture', url: 'https://posthog.com/tutorials/event-tracking-guide' },
    {
        key: 'autoCapture',
        name: 'Autocapture',
        url: 'https://posthog.com/docs/product-analytics/autocapture',
    },
    {
        key: 'userIdentification',
        name: 'User identification',
        url: 'https://posthog.com/docs/product-analytics/identify',
    },
    { key: 'sessionRecording', name: 'Session replay', url: 'https://posthog.com/docs/session-replay' },
    { key: 'featureFlags', name: 'Feature flags', url: 'https://posthog.com/docs/feature-flags' },
    {
        key: 'groupAnalytics',
        name: 'Group analytics',
        url: 'https://posthog.com/docs/product-analytics/group-analytics',
    },
    { key: 'surveys', name: 'Surveys', url: 'https://posthog.com/docs/surveys' },
    {
        key: 'llmObservability',
        name: 'LLM observability',
        url: 'https://posthog.com/docs/ai-engineering/observability',
    },
    { key: 'errorTracking', name: 'Error tracking', url: 'https://posthog.com/docs/error-tracking' },
] as const

export type LibraryFeaturesProps = {
    availability?: Record<(typeof features)[number]['key'], boolean>
}

export const LibraryFeatures = ({ availability }: LibraryFeaturesProps) => {
    return availability ? (
        <div className="lg:border-t border-b border-light dark:border-dark lg:pt-2 pb-4 space-y-2 -mt-4 lg:mt-4 mb-4">
            <h5 className="text-primary/50 dark:text-primary-dark/50 pt-2 pb-1 !m-0 font-semibold text-base">
                Which features are available in this library?
            </h5>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0 gap-x-2 gap-y-1">
                {features
                    // Only render features that are "defined"
                    .filter((feature) => availability[feature.key] !== undefined && availability[feature.key] !== null)
                    .map((feature) => (
                        <li key={feature.key} className="flex items-center">
                            {availability[feature.key] ? (
                                <img src={CheckIcon} alt="Available" className="h-4 w-4" aria-hidden="true" />
                            ) : (
                                <img src={MinusIcon} alt="Not available" className="h-4 w-4" aria-hidden="true" />
                            )}
                            <span className="text-[15px] ml-2 mr-.5">{feature.name}</span>
                            <Link to={feature.url} className="hover:!bg-none active:!bg-none focus:!bg-none p-1 group">
                                <InfoIcon className="w-4 xl:w-3.5 h-4 xl:h-3.5 opacity-75 group-hover:opacity-100 relative transform transition-all group-hover:scale-[1.2] active:top-[1px] active:scale-[1.1]" />
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    ) : null
}

export default LibraryFeatures
