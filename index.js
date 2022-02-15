module.exports = function shutupdurion(mod) {
	mod.hook('S_START_ACTION_SCRIPT', 3, event => {
		if (event.script == 60029801) return false
	})
}
