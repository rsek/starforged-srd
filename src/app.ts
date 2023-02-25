import { defineApp } from 'iles'
import * as korStyles from '@kor-ui/kor/kor-styles.css'

export default defineApp({
	head: {
		link: [korStyles]
	}
})
