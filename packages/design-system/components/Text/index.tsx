interface TextProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: React.ReactNode;
}
export function Text({ tag, children, ...props }: TextProps) {
  const Component = tag;
  return <Component {...props}>{children}</Component>
}
