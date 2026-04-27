export interface NavItem {
    label: string;
    sectionId?: string;
    route?: string;
}

export interface DestinationCardMock {
    title: string;
    image: string;
    description: string;
}

export interface PopularTripMock {
    title: string;
    image: string;
    description: string;
}

export interface Review {
    name: string;
    avatar: string;
    comment: string;
    rating: number;
}

export interface FeatureHighlightMock {
    title: string;
    description: string;
    image: string;
    tags: string[];
}