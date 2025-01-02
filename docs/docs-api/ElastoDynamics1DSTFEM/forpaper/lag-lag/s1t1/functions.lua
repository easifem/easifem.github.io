function velocityLeft(t)
	return 2.0 * math.pi * math.cos(2.0 * math.pi * t)
end

function velocityRight(t)
	return 2.0 * math.pi * math.cos(2.0 * math.pi * (t - 1.0))
end

function initialVel(x)
	return 2.0 * math.pi * math.cos(2.0 * math.pi * x)
end

function initialDisp(x)
	return -math.sin(2.0 * math.pi * x)
end
