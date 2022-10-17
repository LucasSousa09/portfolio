interface SocilLinkProps{
  imgSrc: string,
  altAtb: string,
  linkUrl: string,
  linkShown?: string
}

export function SocialLink({imgSrc, altAtb, linkUrl, linkShown}: SocilLinkProps){
  return (
    <a href={linkUrl} className="flex items-center gap-4 group">
      <img className="sm:h-8 sm:w-8 lg:h-10 lg:w-10" src={imgSrc} alt={altAtb} />
      <span className="break-all font-medium group-hover:underline sm:text-sm lg:text-base" >
        {
          linkShown ? linkShown : linkUrl
        }
      </span>
    </a>
  )
}