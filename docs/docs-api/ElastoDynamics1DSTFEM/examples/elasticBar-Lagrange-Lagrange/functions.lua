function velocityLeft(t)
	return 0.0
end

function tractionRight(t)
	local t0 = 5.0e-3
	local f0 = 1.0e+6
	return f0 * math.sin(2.0 * math.pi * t / t0)
end

function initialVel(x)
	return 0.0
end

function initialDisp(x)
	return 0.0
end
