type Label = {
  label: string;
};

type LabelWithAttributes<T> = {
  label: string;
  attributes: T;
};

type Image = {
  label: string;
  attributes: {
    height: string;
  };
};

type Price = {
  label: string;
  attributes: {
    currency: string;
    amount: string;
  };
};

type ContentType = {
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

type Link = {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
};

type Id = {
  label: string;
  attributes: {
    "im:id": string;
  };
};

type Artist = {
  label: string;
  attributes: {
    href: string;
  };
};

type Category = {
  attributes: {
    "im:id": string;
    label: string;
    scheme: string;
    term: string;
  };
};

type ReleaseDate = {
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
