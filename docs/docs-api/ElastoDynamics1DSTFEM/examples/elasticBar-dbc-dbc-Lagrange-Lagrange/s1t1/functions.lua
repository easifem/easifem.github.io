function velocityLeft(t)
	local fm = 1.0
	local pi = math.pi
	local pi2 = pi * pi
	local t2 = t * t
	local t0 = -pi2 * fm * fm * t2
	return (1.0 + 2.0 * t0) * math.exp(t0)
end

function velocityRight(t)
	return 0.0
end

function tractionRight(t)
	return 0.0
end

function tractionLeft(t)
	return 0.0
end

function initialVel(x)
	return 0.0
end

function initialDisp(x)
	return 0.0
end

function bodyForce(x, t)
	return 0.0
	-- local E = 2.0
	-- local r = 1.0
	-- local b0 = (E - r) / r
	-- local two_pi = 2.0 * math.pi
	-- local four_pi_sqr = 4.0 * math.pi * math.pi
	-- return b0 * four_pi_sqr * math.sin(two_pi * (t - x))
end
