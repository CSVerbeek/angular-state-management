export type ShallowState = {
  parentSays: string;
  child1Says: string;
  child2Says: string;
};

export type DeepState = {
  parentSays: string;
  childrenSay: string[];
  grandchildrenSay: string[];
};