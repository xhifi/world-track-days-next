import NLink from "next/link";

const Link = ({ href, children, ...rest }) => {
  if (!href) {
    return <button {...rest}>{children}</button>;
  }

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NLink href={href} {...rest}>
      {children}
    </NLink>
  );
};

export default Link;
