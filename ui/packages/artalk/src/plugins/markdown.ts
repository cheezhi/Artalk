import type ArtalkPlugin from '~/types/plugin'
import * as marked from '@/lib/marked'

export const Markdown: ArtalkPlugin = (ctx) => {
  marked.initMarked()

  if (ctx.conf.markedReplacers) {
    marked.setReplacers(ctx.conf.markedReplacers)
  }
}