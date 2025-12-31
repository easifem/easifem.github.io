---
title: STConvectiveMatrix
author: Vikas Sharma, Ph. D.
date: 23 Nov 2021
update: 23 Nov 2021
tags:
  - STConvectiveMatrix
---

# STConvectiveMatrix

## Theory

Now we want to compute the space-time convective finite element matrix for following PDE.

$$
\frac{\partial u_i}{\partial t} + c_k \frac{\partial u_i}{\partial x_k} + \cdots
$$

We would like to compute the following matrices.

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta u_{iI} \quad \int_{Q_n} N^I T_a c_k \frac{\partial N^J T_b}{\partial x_k} {dQ} \quad {}^{b}u_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta u_{iI} \quad \int_{Q_n} c_k \frac{\partial N^I T_a}{\partial x_k} N^J T_b {dQ} \quad {}^{b}u_{iJ}
$$

Now we want to compute the space-time convective finite element matrix for following PDE.

$$
\frac{\partial \textbf{U}}{\partial t} + \frac{\partial \textbf{f(U)}}{\partial x} + \frac{\partial \textbf{g(U)}}{\partial y} + \frac{\partial \textbf{h(U)}}{\partial z} + \cdots
$$

where $\textbf{U}, \textbf{f}, \textbf{g}, \textbf{h} \in R^m$. In this case we wish to compute the following matrices.

$$
{}^{4}M(I,J,a,b) = \delta {}^{a} U_{iI} \quad \int_{Q_n} N^I T_a \frac{\partial N^J T_b}{\partial x} {dQ} \quad {}^{b}f_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = \delta {}^{a} U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial x} N^J T_b {dQ} \quad {}^{b}f_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = \delta {}^{a} U_{iI} \quad \int_{Q_n} N^I T_a \frac{\partial N^J T_b}{\partial x} {dQ} \quad {}^{b}g_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = \delta {}^{a} U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial x} N^J T_b {dQ} \quad {}^{b}g_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = \delta {}^{a} U_{iI} \quad \int_{Q_n} N^I T_a \frac{\partial N^J T_b}{\partial x} {dQ} \quad {}^{b}h_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = \delta {}^{a} U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial x} N^J T_b {dQ} \quad {}^{b}h_{iJ}
$$

Now we want to compute the space-time convective finite element matrix for following PDE.

$$
\frac{\partial u_i}{\partial t} + c_k \frac{\partial u_i}{\partial x_k} + \cdots
$$

We would like to compute the following matrices.

$$
{}^{4}M(I,J,a,b) = \delta {}^{a}u_{iI} \int_{Q_n} \frac{ \partial N^I T_a}{\partial t} c_{k}^{h} \frac{\partial N^J T_b}{\partial x_k} {dQ} \quad {}^{b}u_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = \delta {}^{a}u_{iI} \int_{Q_n} c_{k}^{h} \frac{\partial N^I T_a}{\partial x_k} \frac{\partial N^J T_b}{\partial t} {dQ} \quad {}^{b}u_{iJ}
$$

Now we want to compute the space-time convective finite element matrix for following PDE.

$$
\frac{\partial \textbf{U}}{\partial t} + \frac{\partial \textbf{f(U)}}{\partial x} + \frac{\partial \textbf{g(U)}}{\partial y} + \frac{\partial \textbf{h(U)}}{\partial z} + \cdots
$$

where $\textbf{U}, \textbf{f}, \textbf{g}, \textbf{h} \in R^m$. In this case we wish to compute the following matrices.

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial t} \frac{\partial N^J T_b}{\partial x} {dQ} \quad {}^{b}f_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial x} \frac{\partial N^J T_b}{\partial t} {dQ} \quad {}^{b}f_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial t} \frac{\partial N^J T_b}{\partial y} {dQ} \quad {}^{b}g_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial y} \frac{\partial N^J T_b}{\partial t} {dQ} \quad {}^{b}g_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial t} \frac{\partial N^J T_b}{\partial z} {dQ} \quad {}^{b}h_{iJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial z} \frac{\partial N^J T_b}{\partial t} {dQ} \quad {}^{b}h_{iJ}
$$

Now we want to compute the space-time convective finite element matrix for following PDE.

$$
\frac{\partial \textbf{U}}{\partial t} + \mathbf{A_1} \frac{\partial \textbf{U}}{\partial x} + \mathbf{A_2} \frac{\partial \textbf{U}}{\partial y} + \mathbf{A_3} \frac{\partial \textbf{U}}{\partial z} + \cdots
$$

where $\textbf{U} \in R^m$, $\mathbf{A_i} \in R^{m \times m}$. In this case we wish to compute the following matrices.

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} N^I T_a [ \mathbf{A_1} ]_{ij} \frac{\partial N^J T_b}{\partial x} {dQ} \quad {}^{b}f_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [ \mathbf{A_1} ]_{ji} \frac{\partial N^I T_a}{\partial x} N^J T_b {dQ} \quad {}^{b}f_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} N^I T_a [\mathbf{A_2}]_{ij} \frac{\partial N^J T_b}{\partial y} {dQ} \quad {}^{b}g_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [\mathbf{A_2}]_{ji} \frac{\partial N^I T_a}{\partial y} N^J T_b {dQ} \quad {}^{b}g_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} N^I T_a [\mathbf{A_3}]_{ij} \frac{\partial N^J T_b}{\partial z} {dQ} \quad {}^{b}h_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [\mathbf{A_3}]_{ji} \frac{\partial N^I T_a}{\partial z} N^J T_b {dQ} \quad {}^{b}h_{jJ}
$$

The shape of each ${}^{4}M(:,:,a,b)$ is $(N_{NS} \times m, N_{NS} \times m)$. In this case there will be coupling between different components of $\mathbf{U}$. This coupling is due to $\mathbf{A_i}$. The structure of any of the above ${}^{4}\mathbf{M}$ is given as

$$
{}^{4}\mathbf{M}(:,:,a,b) =
\begin{bmatrix}
\mathbf{M_{11}} & \cdots & \mathbf{M_{1m}} \\
\vdots & \ddots & \vdots \\
\mathbf{M_{m1}} & \cdots & \mathbf{M_{mm}} \\
\end{bmatrix}
$$

Each $\mathbf{M_{ij}}$ has shape $(N_{ns} \times N_{ns})$.

Now we want to compute the space-time convective finite element matrix for following PDE.

$$
\frac{\partial \textbf{U}}{\partial t} + \mathbf{A_1} \frac{\partial \textbf{U}}{\partial x} + \mathbf{A_2} \frac{\partial \textbf{U}}{\partial y} + \mathbf{A_3} \frac{\partial \textbf{U}}{\partial z} + \cdots
$$

where $\textbf{U} \in R^m$, $\mathbf{A_i} \in R^{m \times m}$. In this case we wish to compute the following matrices.

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial t} [ \mathbf{A_1} ]_{ij} \frac{\partial N^J T_b}{\partial x} {dQ} \quad {}^{b}f_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [ \mathbf{A_1} ]_{ji} \frac{\partial N^I T_a}{\partial x} \frac{\partial N^J T_b}{\partial t} {dQ} \quad {}^{b}f_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial t} [\mathbf{A_2}]_{ij} \frac{\partial N^J T_b}{\partial y} {dQ} \quad {}^{b}g_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [\mathbf{A_2}]_{ji} \frac{\partial N^I T_a}{\partial y} \frac{\partial N^J T_b}{\partial t} {dQ} \quad {}^{b}g_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} \frac{\partial N^I T_a}{\partial t} [\mathbf{A_3}]_{ij} \frac{\partial N^J T_b}{\partial z} {dQ} \quad {}^{b}h_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [\mathbf{A_3}]_{ji} \frac{\partial N^I T_a}{\partial z} \frac{\partial N^J T_b}{\partial t} {dQ} \quad {}^{b}h_{jJ}
$$

The shape of each ${}^{4}M(:,:,a,b)$ is $(N_{NS} \times m, N_{NS} \times m)$. In this case there will be coupling between different components of $\mathbf{U}$. This coupling is due to $\mathbf{A_i}$. The structure of any of the above ${}^{4}\mathbf{M}$ is given as

$$
{}^{4}\mathbf{M}(:,:,a,b) =
\begin{bmatrix}
\mathbf{M_{11}} & \cdots & \mathbf{M_{1m}} \\
\vdots & \ddots & \vdots \\
\mathbf{M_{m1}} & \cdots & \mathbf{M_{mm}} \\
\end{bmatrix}
$$

Each $\mathbf{M_{ij}}$ has shape $(N_{ns} \times N_{ns})$.

Now consider the following terms in a pde.

$$
\mathbf{A_0} \frac{\partial U}{\partial t} + \mathbf{A_1} \frac{\partial U}{\partial x} + \mathbf{A_2} \frac{\partial \mathbf{U}}{\partial y} + \mathbf{A_3} \frac{\partial U}{\partial t} + \cdots
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [ \mathbf{A_0}]_{ki} \frac{\partial N^I T_a}{\partial t} [ \mathbf{A_1} ]_{kj} \frac{\partial N^J T_b}{\partial x} {dQ} \quad {}^{b}f_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [ \mathbf{A_1} ]_{ki} \frac{\partial N^I T_a}{\partial x} [\mathbf{A_0}]_{kj} \frac{\partial N^J T_b}{\partial t} {dQ} \quad {}^{b}f_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [ \mathbf{A_0}]_{ki}\frac{\partial N^I T_a}{\partial t} [\mathbf{A_2}]_{kj} \frac{\partial N^J T_b}{\partial y} {dQ} \quad {}^{b}g_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [\mathbf{A_2}]_{ki} \frac{\partial N^I T_a}{\partial y} [ \mathbf{A_0}]_{kj} \frac{\partial N^J T_b}{\partial t} {dQ} \quad {}^{b}g_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [ \mathbf{A_0}]_{ki}\frac{\partial N^I T_a}{\partial t} [\mathbf{A_3}]_{kj} \frac{\partial N^J T_b}{\partial z} {dQ} \quad {}^{b}h_{jJ}
$$

$$
{}^{4}M(I,J,a,b) = {}^{a}\delta U_{iI} \quad \int_{Q_n} [\mathbf{A_3}]_{ki} \frac{\partial N^I T_a}{\partial z} [ \mathbf{A_0}]_{kj} \frac{\partial N^J T_b}{\partial t} {dQ} \quad {}^{b}h_{jJ}
$$

