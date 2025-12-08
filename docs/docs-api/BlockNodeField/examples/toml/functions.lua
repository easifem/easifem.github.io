function velocityLeft(t)
	return 0.0
end

function velocityRight(t)
  local f = 1.0
  local t0 = 1.0
  local amp = 1.0
	return amp*(2.0*(math.pi*f)^2)*(t-t0)*math.exp(-((math.pi) * f *(t-t0))^2)*(2.0 * ((math.pi) * f *(t-t0))^2-3.0)
end

function initialVel(x)
	return 0.0
end

function initialDisp(x)
	return 0.0
end

function referenceDisp(x,t)
  local pi = math.pi
  local f = 1.0
  local t0 = 1.0
  local amp = 1.0
  local L = 10.0
  local c = 1.0

  return amp * (1.0 - 2.0 * (pi * f*(x -L+ c*(t -t0)))^2) * math.exp(-(pi * f *(x-L + c*(t -t0)))^2)
end 


function referenceVel(x,t)
  local pi = math.pi
  local f = 1.0
  local t0 = 1.0
  local amp = 1.0
  local L = 10.0
  local c = 1.0
  
  return amp * 2.0*((pi*f)^2)*(x -L + c*(t -t0))*math.exp(-(pi * f *(x -L  + c*(t -t0)))^2)*(2.0 * (pi * f *(x -L + c*(t -t0)))^2-3.0)
end

-- function bodyForce(x, t)
-- 	local E = 2.0
-- 	local r = 1.0
-- 	local b0 = (E - r) / r
-- 	local two_pi = 2.0 * math.pi
-- 	local four_pi_sqr = 4.0 * math.pi * math.pi
-- 	return b0 * four_pi_sqr * math.sin(two_pi * (t - x))
-- end

-- function tractionRight(t)
--     local amp = 1.0
--     local t0 = 0.0
--     local omega = 1.0
    
--     if t <= 5e-3 then
--         return amp*math.sin(omega*t - t0)

--     else 
--         return 0.0
--     end
-- end

