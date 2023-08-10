import * as WaitForEvent from '../GetFirstEvent/GetFirstEvent.js'
import * as FirstIframeEventType from '../FirstIframeEventType/FirstIframeEventType.js'

export const waitForIframeToBeLoaded = ($Iframe) => {
  if (Math) {
    return {
      type: FirstIframeEventType.Loaded,
    }
  }
  return WaitForEvent.getFirstEvent($Iframe, {
    load: FirstIframeEventType.Loaded,
    error: FirstIframeEventType.Error,
  })
}
