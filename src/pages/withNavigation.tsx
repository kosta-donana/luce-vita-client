const transitionalPaths = ['/login', '/signup', '/emailverification'];

export const withNavigation = <P extends object>(WrappedComponent: React.FC<P>) => {
  return (props: P) => {
    if (transitionalPaths.includes(location.pathname)) {
      if (location.pathname !== sessionStorage?.getItem('prev')) {
        sessionStorage?.setItem(
          'backCount',
          (Number(sessionStorage.getItem('backCount')!) + 1).toString()
        );
      }
    } else {
      sessionStorage?.setItem('backCount', '0');
    }

    sessionStorage?.setItem('prev', location.pathname);

    return <WrappedComponent {...props} />;
  };
};
