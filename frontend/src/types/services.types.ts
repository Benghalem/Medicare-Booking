export type TService = {
  name: string;
  desc: string;
  bgColor: string;
  textColor: string;
};

export type ServicesCardProps = {
  item: TService;
  index: number;
};
