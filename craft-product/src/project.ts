import {makeProject} from '@revideo/core';

import { Heading, craftindustry, platform,research,study, severalfactors, amenitis, studyconcludes } from "./scenes/Craft Products"
import carftproductAudio from "./scenes/Craft Products/output_tts.mp3"

export default makeProject({
  scenes: [Heading, craftindustry, platform, research,study, severalfactors, amenitis, studyconcludes],
  audio: carftproductAudio
});
