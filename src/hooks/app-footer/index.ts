export interface IUseTab {
  transferTab: (path: string, index: number) => void;
  activePath: string;
  active: number;
}

function useTab() {
  let activePath: string = '/';
  let active: number = 0;

  function transferTab(path: string, index: number): void {
    console.warn(path, index);
    console.warn(activePath);
    console.warn(active);
    activePath = path;
    active = index;
  }

  return {
    activePath,
    active,
    transferTab,
  };
}

export { useTab };
