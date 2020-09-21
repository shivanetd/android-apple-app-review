export interface Entry {
    author: Author;
    "im:version": ImVersion;
    "im:rating": ImRating;
    id: Id;
    title: Title;
    content: Content;
    link: Link;
    "im:voteSum": ImVoteSum;
    "im:contentType": ImContentType;
    "im:voteCount": ImVoteCount;
}


export interface Title {
    label: string;
}

export interface ImRating {
    label: string;
}

export interface ImVersion {
    label: string;
}

export interface Author {
    label: string;
    name: ImVersion
}

export interface Id {
    label: string;
}

export interface Content {
    label: string;
    attributes: Attributes;
}

export interface Attributes {
    type: string;
}

export interface Attributes2 {
    rel: string;
    href: string;
}

export interface Link {
    attributes: Attributes2;
}

export interface ImVoteSum {
    label: string;
}

export interface Attributes3 {
    term: string;
    label: string;
}

export interface ImContentType {
    attributes: Attributes3;
}

export interface ImVoteCount {
    label: string;
}