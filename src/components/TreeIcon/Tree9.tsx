import { Box } from '@kuma-ui/core'
import { Tree9 as TreeImage } from './TreeList'

export const Tree9 = () => {
  return (
    <span>
      <img src={TreeImage} alt='logo' width={47} height={65} />
      <Box bgColor={'#593D23'} width={'auto'} height={5} mt={'-5px'} />
    </span>
  )
}
