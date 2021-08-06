export type postData = {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  yoast_head: string;
  categories: number[];
};
