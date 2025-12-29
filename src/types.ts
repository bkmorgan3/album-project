export type Label = {
  label: string;
};

export type LabelWithAttributes<T> = {
  label: string;
  attributes: T;
};

export type Image = {
  label: string;
  attributes: {
    height: string;
  };
};

export type Price = {
  label: string;
  attributes: {
    currency: string;
    amount: string;
  };
};

export type ContentType = {
  "im:contentType": {
    attributes: {
      term: string;
      label: string;
    };
  };
  attributes: {
    term: string;
    label: string;
  };
};

export type Link = {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
};

export type Id = {
  label: string;
  attributes: {
    "im:id": string;
  };
};

export type Artist = {
  label: string;
  attributes: {
    href: string;
  };
};

export type Category = {
  attributes: {
    "im:id": string;
    label: string;
    scheme: string;
    term: string;
  };
};

export type ReleaseDate = {
  label: string;
  attributes: {
    label: string;
  };
};

export type AlbumEntry = {
  category: Category;
  id: Id;
  "im:artist": Artist;
  "im:contentType": ContentType;
  "im:image": Image;
  "im:itemCount": Label;
  "im:name": Label;
  "im:price": Price;
  "im:releaseDate": ReleaseDate;
  link: Link;
  rights: Label;
  title: Label;
};
