git -c core.fileMode=false

WSL and Windows 10 do not agree on file permissions metadata.

WSL uses extended attributes to preserve POSIX-style file permissions on NTFS.

I don't know how to fix this with Dropbox on Windows 10.

macOS Dropbox maps the perms ok.

But bogus fileflags could get checked into the git repo.

THIS WAY LIES MADNESS
