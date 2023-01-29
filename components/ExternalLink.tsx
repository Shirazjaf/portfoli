
interface ExternalLinkProps {
  href: string,
  children: React.ReactNode
}

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a
    className='flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
);

export default ExternalLink;