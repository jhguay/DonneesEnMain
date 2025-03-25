const données=[
[0, 0, 0, 0, 0, 0, 0, 0, 0.0, 0.13, 0.87] ,
[0, 0, 0, 0, 0, 0, 0, 1, 0.0, 0.04, 0.96] ,
[0, 0, 0, 0, 0, 0, 1, 0, 0.0, 0.47, 0.53] ,
[0, 0, 0, 0, 0, 0, 1, 1, 0.0, 0.28, 0.72] ,
[0, 0, 0, 0, 0, 1, 0, 0, 0.0, 0.43, 0.57] ,
[0, 0, 0, 0, 0, 1, 0, 1, 0.0, 0.34, 0.66] ,
[0, 0, 0, 0, 0, 1, 1, 0, 0.1, 0.87, 0.03] ,
[0, 0, 0, 0, 0, 1, 1, 1, 0.11, 0.86, 0.02] ,
[0, 0, 0, 0, 1, 0, 0, 0, 0.01, 0.62, 0.37] ,
[0, 0, 0, 0, 1, 0, 0, 1, 0.01, 0.62, 0.37] ,
[0, 0, 0, 0, 1, 0, 1, 0, 0.1, 0.87, 0.03] ,
[0, 0, 0, 0, 1, 0, 1, 1, 0.12, 0.86, 0.02] ,
[0, 0, 0, 0, 1, 1, 0, 0, 0.05, 0.87, 0.08] ,
[0, 0, 0, 0, 1, 1, 0, 1, 0.09, 0.88, 0.04] ,
[0, 0, 0, 0, 1, 1, 1, 0, 0.35, 0.64, 0.0] ,
[0, 0, 0, 0, 1, 1, 1, 1, 0.49, 0.51, 0.0] ,
[0, 0, 0, 1, 0, 0, 0, 0, 0.0, 0.16, 0.84] ,
[0, 0, 0, 1, 0, 0, 0, 1, 0.0, 0.06, 0.94] ,
[0, 0, 0, 1, 0, 0, 1, 0, 0.0, 0.36, 0.64] ,
[0, 0, 0, 1, 0, 0, 1, 1, 0.0, 0.19, 0.81] ,
[0, 0, 0, 1, 0, 1, 0, 0, 0.0, 0.41, 0.59] ,
[0, 0, 0, 1, 0, 1, 0, 1, 0.0, 0.34, 0.66] ,
[0, 0, 0, 1, 0, 1, 1, 0, 0.04, 0.87, 0.09] ,
[0, 0, 0, 1, 0, 1, 1, 1, 0.05, 0.88, 0.06] ,
[0, 0, 0, 1, 1, 0, 0, 0, 0.01, 0.56, 0.44] ,
[0, 0, 0, 1, 1, 0, 0, 1, 0.01, 0.52, 0.47] ,
[0, 0, 0, 1, 1, 0, 1, 0, 0.05, 0.87, 0.09] ,
[0, 0, 0, 1, 1, 0, 1, 1, 0.06, 0.88, 0.06] ,
[0, 0, 0, 1, 1, 1, 0, 0, 0.03, 0.81, 0.16] ,
[0, 0, 0, 1, 1, 1, 0, 1, 0.04, 0.86, 0.1] ,
[0, 0, 0, 1, 1, 1, 1, 0, 0.2, 0.78, 0.01] ,
[0, 0, 0, 1, 1, 1, 1, 1, 0.32, 0.68, 0.0] ,
[0, 0, 1, 0, 0, 0, 0, 0, 0.0, 0.09, 0.91] ,
[0, 0, 1, 0, 0, 0, 0, 1, 0.0, 0.04, 0.96] ,
[0, 0, 1, 0, 0, 0, 1, 0, 0.01, 0.72, 0.26] ,
[0, 0, 1, 0, 0, 0, 1, 1, 0.0, 0.53, 0.46] ,
[0, 0, 1, 0, 0, 1, 0, 0, 0.01, 0.6, 0.39] ,
[0, 0, 1, 0, 0, 1, 0, 1, 0.0, 0.53, 0.46] ,
[0, 0, 1, 0, 0, 1, 1, 0, 0.19, 0.8, 0.01] ,
[0, 0, 1, 0, 0, 1, 1, 1, 0.18, 0.81, 0.01] ,
[0, 0, 1, 0, 1, 0, 0, 0, 0.02, 0.77, 0.21] ,
[0, 0, 1, 0, 1, 0, 0, 1, 0.01, 0.74, 0.25] ,
[0, 0, 1, 0, 1, 0, 1, 0, 0.21, 0.78, 0.01] ,
[0, 0, 1, 0, 1, 0, 1, 1, 0.23, 0.77, 0.01] ,
[0, 0, 1, 0, 1, 1, 0, 0, 0.11, 0.86, 0.03] ,
[0, 0, 1, 0, 1, 1, 0, 1, 0.17, 0.82, 0.01] ,
[0, 0, 1, 0, 1, 1, 1, 0, 0.56, 0.44, 0.0] ,
[0, 0, 1, 0, 1, 1, 1, 1, 0.63, 0.37, 0.0] ,
[0, 0, 1, 1, 0, 0, 0, 0, 0.0, 0.12, 0.88] ,
[0, 0, 1, 1, 0, 0, 0, 1, 0.0, 0.04, 0.96] ,
[0, 0, 1, 1, 0, 0, 1, 0, 0.01, 0.53, 0.47] ,
[0, 0, 1, 1, 0, 0, 1, 1, 0.0, 0.36, 0.64] ,
[0, 0, 1, 1, 0, 1, 0, 0, 0.0, 0.45, 0.55] ,
[0, 0, 1, 1, 0, 1, 0, 1, 0.0, 0.38, 0.61] ,
[0, 0, 1, 1, 0, 1, 1, 0, 0.11, 0.86, 0.03] ,
[0, 0, 1, 1, 0, 1, 1, 1, 0.12, 0.86, 0.02] ,
[0, 0, 1, 1, 1, 0, 0, 0, 0.01, 0.66, 0.33] ,
[0, 0, 1, 1, 1, 0, 0, 1, 0.01, 0.64, 0.35] ,
[0, 0, 1, 1, 1, 0, 1, 0, 0.12, 0.86, 0.02] ,
[0, 0, 1, 1, 1, 0, 1, 1, 0.14, 0.84, 0.02] ,
[0, 0, 1, 1, 1, 1, 0, 0, 0.06, 0.88, 0.06] ,
[0, 0, 1, 1, 1, 1, 0, 1, 0.09, 0.87, 0.03] ,
[0, 0, 1, 1, 1, 1, 1, 0, 0.4, 0.6, 0.0] ,
[0, 0, 1, 1, 1, 1, 1, 1, 0.53, 0.47, 0.0] ,
[0, 1, 0, 0, 0, 0, 0, 0, 0.0, 0.17, 0.83] ,
[0, 1, 0, 0, 0, 0, 0, 1, 0.0, 0.06, 0.94] ,
[0, 1, 0, 0, 0, 0, 1, 0, 0.01, 0.66, 0.33] ,
[0, 1, 0, 0, 0, 0, 1, 1, 0.0, 0.53, 0.47] ,
[0, 1, 0, 0, 0, 1, 0, 0, 0.01, 0.67, 0.32] ,
[0, 1, 0, 0, 0, 1, 0, 1, 0.01, 0.63, 0.36] ,
[0, 1, 0, 0, 0, 1, 1, 0, 0.16, 0.82, 0.02] ,
[0, 1, 0, 0, 0, 1, 1, 1, 0.18, 0.81, 0.01] ,
[0, 1, 0, 0, 1, 0, 0, 0, 0.02, 0.72, 0.27] ,
[0, 1, 0, 0, 1, 0, 0, 1, 0.01, 0.7, 0.29] ,
[0, 1, 0, 0, 1, 0, 1, 0, 0.15, 0.83, 0.02] ,
[0, 1, 0, 0, 1, 0, 1, 1, 0.18, 0.81, 0.01] ,
[0, 1, 0, 0, 1, 1, 0, 0, 0.09, 0.87, 0.04] ,
[0, 1, 0, 0, 1, 1, 0, 1, 0.14, 0.84, 0.02] ,
[0, 1, 0, 0, 1, 1, 1, 0, 0.46, 0.54, 0.0] ,
[0, 1, 0, 0, 1, 1, 1, 1, 0.58, 0.42, 0.0] ,
[0, 1, 0, 1, 0, 0, 0, 0, 0.0, 0.19, 0.81] ,
[0, 1, 0, 1, 0, 0, 0, 1, 0.0, 0.07, 0.93] ,
[0, 1, 0, 1, 0, 0, 1, 0, 0.0, 0.49, 0.51] ,
[0, 1, 0, 1, 0, 0, 1, 1, 0.0, 0.32, 0.68] ,
[0, 1, 0, 1, 0, 1, 0, 0, 0.01, 0.55, 0.45] ,
[0, 1, 0, 1, 0, 1, 0, 1, 0.01, 0.52, 0.48] ,
[0, 1, 0, 1, 0, 1, 1, 0, 0.08, 0.88, 0.04] ,
[0, 1, 0, 1, 0, 1, 1, 1, 0.1, 0.87, 0.03] ,
[0, 1, 0, 1, 1, 0, 0, 0, 0.01, 0.64, 0.35] ,
[0, 1, 0, 1, 1, 0, 0, 1, 0.01, 0.6, 0.39] ,
[0, 1, 0, 1, 1, 0, 1, 0, 0.08, 0.88, 0.05] ,
[0, 1, 0, 1, 1, 0, 1, 1, 0.1, 0.87, 0.03] ,
[0, 1, 0, 1, 1, 1, 0, 0, 0.05, 0.87, 0.08] ,
[0, 1, 0, 1, 1, 1, 0, 1, 0.07, 0.88, 0.05] ,
[0, 1, 0, 1, 1, 1, 1, 0, 0.3, 0.7, 0.01] ,
[0, 1, 0, 1, 1, 1, 1, 1, 0.43, 0.57, 0.0] ,
[0, 1, 1, 0, 0, 0, 0, 0, 0.0, 0.17, 0.83] ,
[0, 1, 1, 0, 0, 0, 0, 1, 0.0, 0.06, 0.94] ,
[0, 1, 1, 0, 0, 0, 1, 0, 0.03, 0.85, 0.12] ,
[0, 1, 1, 0, 0, 0, 1, 1, 0.01, 0.78, 0.21] ,
[0, 1, 1, 0, 0, 1, 0, 0, 0.02, 0.82, 0.16] ,
[0, 1, 1, 0, 0, 1, 0, 1, 0.02, 0.81, 0.17] ,
[0, 1, 1, 0, 0, 1, 1, 0, 0.3, 0.7, 0.01] ,
[0, 1, 1, 0, 0, 1, 1, 1, 0.3, 0.7, 0.0] ,
[0, 1, 1, 0, 1, 0, 0, 0, 0.04, 0.86, 0.1] ,
[0, 1, 1, 0, 1, 0, 0, 1, 0.03, 0.86, 0.11] ,
[0, 1, 1, 0, 1, 0, 1, 0, 0.3, 0.69, 0.01] ,
[0, 1, 1, 0, 1, 0, 1, 1, 0.33, 0.67, 0.0] ,
[0, 1, 1, 0, 1, 1, 0, 0, 0.19, 0.8, 0.01] ,
[0, 1, 1, 0, 1, 1, 0, 1, 0.28, 0.72, 0.01] ,
[0, 1, 1, 0, 1, 1, 1, 0, 0.62, 0.38, 0.0] ,
[0, 1, 1, 0, 1, 1, 1, 1, 0.68, 0.32, 0.0] ,
[0, 1, 1, 1, 0, 0, 0, 0, 0.0, 0.17, 0.83] ,
[0, 1, 1, 1, 0, 0, 0, 1, 0.0, 0.06, 0.94] ,
[0, 1, 1, 1, 0, 0, 1, 0, 0.01, 0.7, 0.28] ,
[0, 1, 1, 1, 0, 0, 1, 1, 0.01, 0.59, 0.41] ,
[0, 1, 1, 1, 0, 1, 0, 0, 0.01, 0.71, 0.28] ,
[0, 1, 1, 1, 0, 1, 0, 1, 0.01, 0.69, 0.29] ,
[0, 1, 1, 1, 0, 1, 1, 0, 0.17, 0.81, 0.01] ,
[0, 1, 1, 1, 0, 1, 1, 1, 0.19, 0.8, 0.01] ,
[0, 1, 1, 1, 1, 0, 0, 0, 0.02, 0.77, 0.21] ,
[0, 1, 1, 1, 1, 0, 0, 1, 0.02, 0.76, 0.22] ,
[0, 1, 1, 1, 1, 0, 1, 0, 0.18, 0.81, 0.01] ,
[0, 1, 1, 1, 1, 0, 1, 1, 0.21, 0.78, 0.01] ,
[0, 1, 1, 1, 1, 1, 0, 0, 0.1, 0.87, 0.03] ,
[0, 1, 1, 1, 1, 1, 0, 1, 0.15, 0.83, 0.02] ,
[0, 1, 1, 1, 1, 1, 1, 0, 0.51, 0.49, 0.0] ,
[0, 1, 1, 1, 1, 1, 1, 1, 0.6, 0.4, 0.0] ,
[1, 0, 0, 0, 0, 0, 0, 0, 0.0, 0.13, 0.87] ,
[1, 0, 0, 0, 0, 0, 0, 1, 0.0, 0.05, 0.95] ,
[1, 0, 0, 0, 0, 0, 1, 0, 0.01, 0.75, 0.24] ,
[1, 0, 0, 0, 0, 0, 1, 1, 0.01, 0.65, 0.34] ,
[1, 0, 0, 0, 0, 1, 0, 0, 0.01, 0.61, 0.38] ,
[1, 0, 0, 0, 0, 1, 0, 1, 0.01, 0.61, 0.38] ,
[1, 0, 0, 0, 0, 1, 1, 0, 0.17, 0.82, 0.01] ,
[1, 0, 0, 0, 0, 1, 1, 1, 0.21, 0.78, 0.01] ,
[1, 0, 0, 0, 1, 0, 0, 0, 0.02, 0.78, 0.2] ,
[1, 0, 0, 0, 1, 0, 0, 1, 0.02, 0.81, 0.16] ,
[1, 0, 0, 0, 1, 0, 1, 0, 0.2, 0.79, 0.01] ,
[1, 0, 0, 0, 1, 0, 1, 1, 0.27, 0.72, 0.01] ,
[1, 0, 0, 0, 1, 1, 0, 0, 0.1, 0.87, 0.03] ,
[1, 0, 0, 0, 1, 1, 0, 1, 0.15, 0.83, 0.02] ,
[1, 0, 0, 0, 1, 1, 1, 0, 0.53, 0.47, 0.0] ,
[1, 0, 0, 0, 1, 1, 1, 1, 0.62, 0.38, 0.0] ,
[1, 0, 0, 1, 0, 0, 0, 0, 0.0, 0.16, 0.84] ,
[1, 0, 0, 1, 0, 0, 0, 1, 0.0, 0.06, 0.94] ,
[1, 0, 0, 1, 0, 0, 1, 0, 0.01, 0.62, 0.37] ,
[1, 0, 0, 1, 0, 0, 1, 1, 0.0, 0.48, 0.52] ,
[1, 0, 0, 1, 0, 1, 0, 0, 0.0, 0.49, 0.51] ,
[1, 0, 0, 1, 0, 1, 0, 1, 0.0, 0.5, 0.5] ,
[1, 0, 0, 1, 0, 1, 1, 0, 0.09, 0.87, 0.03] ,
[1, 0, 0, 1, 0, 1, 1, 1, 0.13, 0.85, 0.02] ,
[1, 0, 0, 1, 1, 0, 0, 0, 0.01, 0.66, 0.32] ,
[1, 0, 0, 1, 1, 0, 0, 1, 0.02, 0.74, 0.24] ,
[1, 0, 0, 1, 1, 0, 1, 0, 0.11, 0.86, 0.03] ,
[1, 0, 0, 1, 1, 0, 1, 1, 0.16, 0.82, 0.02] ,
[1, 0, 0, 1, 1, 1, 0, 0, 0.05, 0.88, 0.07] ,
[1, 0, 0, 1, 1, 1, 0, 1, 0.09, 0.88, 0.04] ,
[1, 0, 0, 1, 1, 1, 1, 0, 0.36, 0.64, 0.0] ,
[1, 0, 0, 1, 1, 1, 1, 1, 0.5, 0.49, 0.0] ,
[1, 0, 1, 0, 0, 0, 0, 0, 0.0, 0.15, 0.85] ,
[1, 0, 1, 0, 0, 0, 0, 1, 0.0, 0.06, 0.94] ,
[1, 0, 1, 0, 0, 0, 1, 0, 0.03, 0.87, 0.09] ,
[1, 0, 1, 0, 0, 0, 1, 1, 0.02, 0.83, 0.15] ,
[1, 0, 1, 0, 0, 1, 0, 0, 0.02, 0.78, 0.2] ,
[1, 0, 1, 0, 0, 1, 0, 1, 0.02, 0.79, 0.19] ,
[1, 0, 1, 0, 0, 1, 1, 0, 0.28, 0.71, 0.01] ,
[1, 0, 1, 0, 0, 1, 1, 1, 0.32, 0.68, 0.0] ,
[1, 0, 1, 0, 1, 0, 0, 0, 0.04, 0.87, 0.08] ,
[1, 0, 1, 0, 1, 0, 0, 1, 0.04, 0.88, 0.07] ,
[1, 0, 1, 0, 1, 0, 1, 0, 0.36, 0.64, 0.0] ,
[1, 0, 1, 0, 1, 0, 1, 1, 0.43, 0.57, 0.0] ,
[1, 0, 1, 0, 1, 1, 0, 0, 0.19, 0.8, 0.01] ,
[1, 0, 1, 0, 1, 1, 0, 1, 0.28, 0.72, 0.01] ,
[1, 0, 1, 0, 1, 1, 1, 0, 0.65, 0.35, 0.0] ,
[1, 0, 1, 0, 1, 1, 1, 1, 0.7, 0.29, 0.0] ,
[1, 0, 1, 1, 0, 0, 0, 0, 0.0, 0.13, 0.87] ,
[1, 0, 1, 1, 0, 0, 0, 1, 0.0, 0.05, 0.95] ,
[1, 0, 1, 1, 0, 0, 1, 0, 0.02, 0.81, 0.17] ,
[1, 0, 1, 1, 0, 0, 1, 1, 0.01, 0.73, 0.26] ,
[1, 0, 1, 1, 0, 1, 0, 0, 0.01, 0.66, 0.33] ,
[1, 0, 1, 1, 0, 1, 0, 1, 0.01, 0.65, 0.34] ,
[1, 0, 1, 1, 0, 1, 1, 0, 0.19, 0.8, 0.01] ,
[1, 0, 1, 1, 0, 1, 1, 1, 0.22, 0.77, 0.01] ,
[1, 0, 1, 1, 1, 0, 0, 0, 0.03, 0.83, 0.15] ,
[1, 0, 1, 1, 1, 0, 0, 1, 0.03, 0.84, 0.13] ,
[1, 0, 1, 1, 1, 0, 1, 0, 0.23, 0.76, 0.01] ,
[1, 0, 1, 1, 1, 0, 1, 1, 0.3, 0.7, 0.01] ,
[1, 0, 1, 1, 1, 1, 0, 0, 0.11, 0.86, 0.02] ,
[1, 0, 1, 1, 1, 1, 0, 1, 0.17, 0.82, 0.01] ,
[1, 0, 1, 1, 1, 1, 1, 0, 0.57, 0.43, 0.0] ,
[1, 0, 1, 1, 1, 1, 1, 1, 0.65, 0.35, 0.0] ,
[1, 1, 0, 0, 0, 0, 0, 0, 0.0, 0.25, 0.75] ,
[1, 1, 0, 0, 0, 0, 0, 1, 0.0, 0.09, 0.91] ,
[1, 1, 0, 0, 0, 0, 1, 0, 0.04, 0.87, 0.09] ,
[1, 1, 0, 0, 0, 0, 1, 1, 0.02, 0.85, 0.13] ,
[1, 1, 0, 0, 0, 1, 0, 0, 0.03, 0.83, 0.14] ,
[1, 1, 0, 0, 0, 1, 0, 1, 0.03, 0.85, 0.12] ,
[1, 1, 0, 0, 0, 1, 1, 0, 0.28, 0.71, 0.01] ,
[1, 1, 0, 0, 0, 1, 1, 1, 0.36, 0.63, 0.0] ,
[1, 1, 0, 0, 1, 0, 0, 0, 0.04, 0.87, 0.09] ,
[1, 1, 0, 0, 1, 0, 0, 1, 0.06, 0.88, 0.05] ,
[1, 1, 0, 0, 1, 0, 1, 0, 0.3, 0.69, 0.01] ,
[1, 1, 0, 0, 1, 0, 1, 1, 0.39, 0.6, 0.0] ,
[1, 1, 0, 0, 1, 1, 0, 0, 0.18, 0.81, 0.01] ,
[1, 1, 0, 0, 1, 1, 0, 1, 0.27, 0.72, 0.01] ,
[1, 1, 0, 0, 1, 1, 1, 0, 0.61, 0.39, 0.0] ,
[1, 1, 0, 0, 1, 1, 1, 1, 0.67, 0.33, 0.0] ,
[1, 1, 0, 1, 0, 0, 0, 0, 0.0, 0.25, 0.75] ,
[1, 1, 0, 1, 0, 0, 0, 1, 0.0, 0.1, 0.9] ,
[1, 1, 0, 1, 0, 0, 1, 0, 0.02, 0.79, 0.19] ,
[1, 1, 0, 1, 0, 0, 1, 1, 0.01, 0.73, 0.26] ,
[1, 1, 0, 1, 0, 1, 0, 0, 0.01, 0.73, 0.26] ,
[1, 1, 0, 1, 0, 1, 0, 1, 0.02, 0.78, 0.2] ,
[1, 1, 0, 1, 0, 1, 1, 0, 0.17, 0.82, 0.01] ,
[1, 1, 0, 1, 0, 1, 1, 1, 0.22, 0.77, 0.01] ,
[1, 1, 0, 1, 1, 0, 0, 0, 0.02, 0.8, 0.18] ,
[1, 1, 0, 1, 1, 0, 0, 1, 0.03, 0.84, 0.12] ,
[1, 1, 0, 1, 1, 0, 1, 0, 0.17, 0.81, 0.01] ,
[1, 1, 0, 1, 1, 0, 1, 1, 0.25, 0.75, 0.01] ,
[1, 1, 0, 1, 1, 1, 0, 0, 0.1, 0.87, 0.03] ,
[1, 1, 0, 1, 1, 1, 0, 1, 0.15, 0.83, 0.02] ,
[1, 1, 0, 1, 1, 1, 1, 0, 0.48, 0.52, 0.0] ,
[1, 1, 0, 1, 1, 1, 1, 1, 0.59, 0.41, 0.0] ,
[1, 1, 1, 0, 0, 0, 0, 0, 0.0, 0.37, 0.63] ,
[1, 1, 1, 0, 0, 0, 0, 1, 0.0, 0.16, 0.84] ,
[1, 1, 1, 0, 0, 0, 1, 0, 0.08, 0.89, 0.03] ,
[1, 1, 1, 0, 0, 0, 1, 1, 0.05, 0.9, 0.04] ,
[1, 1, 1, 0, 0, 1, 0, 0, 0.05, 0.89, 0.06] ,
[1, 1, 1, 0, 0, 1, 0, 1, 0.05, 0.89, 0.05] ,
[1, 1, 1, 0, 0, 1, 1, 0, 0.45, 0.55, 0.0] ,
[1, 1, 1, 0, 0, 1, 1, 1, 0.5, 0.49, 0.0] ,
[1, 1, 1, 0, 1, 0, 0, 0, 0.09, 0.88, 0.03] ,
[1, 1, 1, 0, 1, 0, 0, 1, 0.11, 0.86, 0.02] ,
[1, 1, 1, 0, 1, 0, 1, 0, 0.5, 0.5, 0.0] ,
[1, 1, 1, 0, 1, 0, 1, 1, 0.56, 0.44, 0.0] ,
[1, 1, 1, 0, 1, 1, 0, 0, 0.32, 0.67, 0.0] ,
[1, 1, 1, 0, 1, 1, 0, 1, 0.45, 0.55, 0.0] ,
[1, 1, 1, 0, 1, 1, 1, 0, 0.7, 0.3, 0.0] ,
[1, 1, 1, 0, 1, 1, 1, 1, 0.74, 0.26, 0.0] ,
[1, 1, 1, 1, 0, 0, 0, 0, 0.0, 0.3, 0.7] ,
[1, 1, 1, 1, 0, 0, 0, 1, 0.0, 0.13, 0.87] ,
[1, 1, 1, 1, 0, 0, 1, 0, 0.05, 0.88, 0.07] ,
[1, 1, 1, 1, 0, 0, 1, 1, 0.03, 0.88, 0.09] ,
[1, 1, 1, 1, 0, 1, 0, 0, 0.03, 0.85, 0.12] ,
[1, 1, 1, 1, 0, 1, 0, 1, 0.03, 0.87, 0.1] ,
[1, 1, 1, 1, 0, 1, 1, 0, 0.31, 0.68, 0.0] ,
[1, 1, 1, 1, 0, 1, 1, 1, 0.37, 0.63, 0.0] ,
[1, 1, 1, 1, 1, 0, 0, 0, 0.06, 0.88, 0.06] ,
[1, 1, 1, 1, 1, 0, 0, 1, 0.06, 0.89, 0.05] ,
[1, 1, 1, 1, 1, 0, 1, 0, 0.34, 0.66, 0.0] ,
[1, 1, 1, 1, 1, 0, 1, 1, 0.42, 0.58, 0.0] ,
[1, 1, 1, 1, 1, 1, 0, 0, 0.21, 0.78, 0.01] ,
[1, 1, 1, 1, 1, 1, 0, 1, 0.3, 0.7, 0.01] ,
[1, 1, 1, 1, 1, 1, 1, 0, 0.63, 0.36, 0.0] ,
[1, 1, 1, 1, 1, 1, 1, 1, 0.69, 0.31, 0.0] ,
];

// Fonction pour obtenir une prédiction basée sur les variables
function obtenirPrédiction(var1, var2, var3, var4, var5, var6, var7, var8) {
  console.log("Variables reçues :", { var1, var2, var3, var4, var5, var6, var7, var8 });
  
  for (const ligne of données) {
    console.log("Comparaison avec la ligne :", ligne);
    if (
      ligne[0] === var1 && ligne[1] === var2 &&
      ligne[2] === var3 && ligne[3] === var4 &&
      ligne[4] === var5 && ligne[5] === var6 &&
      ligne[6] === var7 && ligne[7] === var8
    ) {
      console.log("Correspondance trouvée :", ligne[8]);
      return "Souverainiste: "+ligne[8]+ "Centriste: "+ligne[9]+" Fédéraliste: "+ligne[10]; // Retourne la prédiction trouvée
    }
  }
  console.log("Aucune correspondance trouvée.");
  return null; // Retourne null si aucune correspondance n'est trouvée
}

// Fonction pour mettre à jour la prédiction affichée
function mettreÀJourPrédiction() {
  const var1 = document.querySelector('input[name="var1"]:checked');
  const var2 = document.querySelector('input[name="var2"]:checked');
  const var3 = document.querySelector('input[name="var3"]:checked');
  const var4 = document.querySelector('input[name="var4"]:checked');
  const var5 = document.querySelector('input[name="var5"]:checked');
  const var6 = document.querySelector('input[name="var6"]:checked');
  const var7 = document.querySelector('input[name="var7"]:checked');
  const var8 = document.querySelector('input[name="var8"]:checked');

  // Vérifiez que toutes les variables sont sélectionnées
  if (var1 && var2 && var3 && var4 && var5 && var6 && var7 && var8) {
    const prédiction = obtenirPrédiction(
      parseInt(var1.value), parseInt(var2.value),
      parseInt(var3.value), parseInt(var4.value),
      parseInt(var5.value), parseInt(var6.value),
      parseInt(var7.value), parseInt(var8.value)
    );

    const predictionElement = document.getElementById('prédiction');
    if (predictionElement) {
      predictionElement.innerHTML = prédiction !== null
        ? `Prédiction : {prédiction}
        : 'Aucune prédiction trouvée';
    } else {
      console.error("L'élément avec l'ID 'prédiction' est introuvable.");
    }
  } else {
    console.warn("Veuillez sélectionner toutes les variables avant de continuer.");
  }
}

// Ajout des écouteurs après le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  const boutons = document.querySelectorAll('input[type="radio"]');
  if (boutons.length > 0) {
    boutons.forEach(bouton => {
      bouton.addEventListener('change', mettreÀJourPrédiction);
    });
    console.log("Écouteurs d'événements ajoutés aux boutons radio.");
  } else {
    console.warn("Aucun bouton radio trouvé dans le DOM.");
  }
});

