const données=[
[0, 0, 0, 0, 0, 0, 0, 0, 0.0, 0.05, 0.95, 33] ,
[0, 0, 0, 0, 0, 0, 0, 1, 0.0, 0.05, 0.95, 4] ,
[0, 0, 0, 0, 0, 0, 1, 0, 0.0, 0.37, 0.62, 0] ,
[0, 0, 0, 0, 0, 0, 1, 1, 0.0, 0.44, 0.55, 0] ,
[0, 0, 0, 0, 0, 1, 0, 0, 0.0, 0.35, 0.64, 0] ,
[0, 0, 0, 0, 0, 1, 0, 1, 0.01, 0.47, 0.52, 0] ,
[0, 0, 0, 0, 0, 1, 1, 0, 0.1, 0.86, 0.05, 1] ,
[0, 0, 0, 0, 0, 1, 1, 1, 0.08, 0.87, 0.05, 1] ,
[0, 0, 0, 0, 1, 0, 0, 0, 0.01, 0.51, 0.48, 1] ,
[0, 0, 0, 0, 1, 0, 0, 1, 0.01, 0.61, 0.38, 4] ,
[0, 0, 0, 0, 1, 0, 1, 0, 0.1, 0.86, 0.05, 0] ,
[0, 0, 0, 0, 1, 0, 1, 1, 0.08, 0.87, 0.05, 0] ,
[0, 0, 0, 0, 1, 1, 0, 0, 0.05, 0.87, 0.08, 0] ,
[0, 0, 0, 0, 1, 1, 0, 1, 0.05, 0.88, 0.07, 0] ,
[0, 0, 0, 0, 1, 1, 1, 0, 0.33, 0.66, 0.0, 2] ,
[0, 0, 0, 0, 1, 1, 1, 1, 0.27, 0.73, 0.01, 0] ,
[0, 0, 0, 1, 0, 0, 0, 0, 0.0, 0.06, 0.94, 18] ,
[0, 0, 0, 1, 0, 0, 0, 1, 0.0, 0.1, 0.9, 4] ,
[0, 0, 0, 1, 0, 0, 1, 0, 0.0, 0.37, 0.62, 4] ,
[0, 0, 0, 1, 0, 0, 1, 1, 0.01, 0.51, 0.49, 2] ,
[0, 0, 0, 1, 0, 1, 0, 0, 0.01, 0.61, 0.38, 1] ,
[0, 0, 0, 1, 0, 1, 0, 1, 0.01, 0.72, 0.27, 3] ,
[0, 0, 0, 1, 0, 1, 1, 0, 0.08, 0.88, 0.05, 1] ,
[0, 0, 0, 1, 0, 1, 1, 1, 0.06, 0.89, 0.05, 0] ,
[0, 0, 0, 1, 1, 0, 0, 0, 0.02, 0.71, 0.28, 1] ,
[0, 0, 0, 1, 1, 0, 0, 1, 0.02, 0.77, 0.21, 3] ,
[0, 0, 0, 1, 1, 0, 1, 0, 0.07, 0.87, 0.05, 0] ,
[0, 0, 0, 1, 1, 0, 1, 1, 0.06, 0.89, 0.06, 1] ,
[0, 0, 0, 1, 1, 1, 0, 0, 0.06, 0.89, 0.05, 0] ,
[0, 0, 0, 1, 1, 1, 0, 1, 0.06, 0.9, 0.05, 1] ,
[0, 0, 0, 1, 1, 1, 1, 0, 0.25, 0.74, 0.01, 4] ,
[0, 0, 0, 1, 1, 1, 1, 1, 0.18, 0.81, 0.01, 9] ,
[0, 0, 1, 0, 0, 0, 0, 0, 0.0, 0.04, 0.96, 9] ,
[0, 0, 1, 0, 0, 0, 0, 1, 0.0, 0.04, 0.96, 11] ,
[0, 0, 1, 0, 0, 0, 1, 0, 0.01, 0.66, 0.33, 0] ,
[0, 0, 1, 0, 0, 0, 1, 1, 0.01, 0.68, 0.31, 0] ,
[0, 0, 1, 0, 0, 1, 0, 0, 0.0, 0.39, 0.61, 4] ,
[0, 0, 1, 0, 0, 1, 0, 1, 0.01, 0.48, 0.51, 0] ,
[0, 0, 1, 0, 0, 1, 1, 0, 0.2, 0.78, 0.02, 0] ,
[0, 0, 1, 0, 0, 1, 1, 1, 0.21, 0.78, 0.01, 0] ,
[0, 0, 1, 0, 1, 0, 0, 0, 0.01, 0.49, 0.5, 1] ,
[0, 0, 1, 0, 1, 0, 0, 1, 0.01, 0.61, 0.38, 0] ,
[0, 0, 1, 0, 1, 0, 1, 0, 0.24, 0.74, 0.01, 0] ,
[0, 0, 1, 0, 1, 0, 1, 1, 0.23, 0.76, 0.01, 0] ,
[0, 0, 1, 0, 1, 1, 0, 0, 0.1, 0.86, 0.04, 2] ,
[0, 0, 1, 0, 1, 1, 0, 1, 0.08, 0.88, 0.04, 0] ,
[0, 0, 1, 0, 1, 1, 1, 0, 0.63, 0.37, 0.0, 0] ,
[0, 0, 1, 0, 1, 1, 1, 1, 0.59, 0.41, 0.0, 0] ,
[0, 0, 1, 1, 0, 0, 0, 0, 0.0, 0.04, 0.96, 21] ,
[0, 0, 1, 1, 0, 0, 0, 1, 0.0, 0.05, 0.95, 3] ,
[0, 0, 1, 1, 0, 0, 1, 0, 0.01, 0.65, 0.33, 3] ,
[0, 0, 1, 1, 0, 0, 1, 1, 0.01, 0.68, 0.31, 2] ,
[0, 0, 1, 1, 0, 1, 0, 0, 0.01, 0.57, 0.42, 0] ,
[0, 0, 1, 1, 0, 1, 0, 1, 0.01, 0.67, 0.31, 0] ,
[0, 0, 1, 1, 0, 1, 1, 0, 0.19, 0.79, 0.02, 4] ,
[0, 0, 1, 1, 0, 1, 1, 1, 0.19, 0.8, 0.01, 3] ,
[0, 0, 1, 1, 1, 0, 0, 0, 0.02, 0.71, 0.27, 2] ,
[0, 0, 1, 1, 1, 0, 0, 1, 0.02, 0.78, 0.2, 0] ,
[0, 0, 1, 1, 1, 0, 1, 0, 0.22, 0.77, 0.01, 0] ,
[0, 0, 1, 1, 1, 0, 1, 1, 0.18, 0.81, 0.01, 0] ,
[0, 0, 1, 1, 1, 1, 0, 0, 0.11, 0.86, 0.03, 1] ,
[0, 0, 1, 1, 1, 1, 0, 1, 0.09, 0.88, 0.03, 0] ,
[0, 0, 1, 1, 1, 1, 1, 0, 0.57, 0.43, 0.0, 0] ,
[0, 0, 1, 1, 1, 1, 1, 1, 0.49, 0.51, 0.0, 2] ,
[0, 1, 0, 0, 0, 0, 0, 0, 0.0, 0.06, 0.94, 1] ,
[0, 1, 0, 0, 0, 0, 0, 1, 0.0, 0.1, 0.9, 0] ,
[0, 1, 0, 0, 0, 0, 1, 0, 0.01, 0.65, 0.34, 0] ,
[0, 1, 0, 0, 0, 0, 1, 1, 0.01, 0.7, 0.29, 0] ,
[0, 1, 0, 0, 0, 1, 0, 0, 0.01, 0.62, 0.37, 0] ,
[0, 1, 0, 0, 0, 1, 0, 1, 0.01, 0.74, 0.25, 0] ,
[0, 1, 0, 0, 0, 1, 1, 0, 0.17, 0.81, 0.02, 0] ,
[0, 1, 0, 0, 0, 1, 1, 1, 0.14, 0.84, 0.02, 0] ,
[0, 1, 0, 0, 1, 0, 0, 0, 0.01, 0.69, 0.3, 0] ,
[0, 1, 0, 0, 1, 0, 0, 1, 0.02, 0.76, 0.22, 2] ,
[0, 1, 0, 0, 1, 0, 1, 0, 0.17, 0.81, 0.02, 0] ,
[0, 1, 0, 0, 1, 0, 1, 1, 0.12, 0.85, 0.02, 0] ,
[0, 1, 0, 0, 1, 1, 0, 0, 0.07, 0.89, 0.04, 0] ,
[0, 1, 0, 0, 1, 1, 0, 1, 0.07, 0.89, 0.04, 0] ,
[0, 1, 0, 0, 1, 1, 1, 0, 0.47, 0.53, 0.0, 0] ,
[0, 1, 0, 0, 1, 1, 1, 1, 0.39, 0.6, 0.0, 0] ,
[0, 1, 0, 1, 0, 0, 0, 0, 0.0, 0.11, 0.89, 0] ,
[0, 1, 0, 1, 0, 0, 0, 1, 0.0, 0.2, 0.8, 1] ,
[0, 1, 0, 1, 0, 0, 1, 0, 0.01, 0.65, 0.34, 0] ,
[0, 1, 0, 1, 0, 0, 1, 1, 0.01, 0.74, 0.25, 0] ,
[0, 1, 0, 1, 0, 1, 0, 0, 0.02, 0.79, 0.2, 1] ,
[0, 1, 0, 1, 0, 1, 0, 1, 0.02, 0.83, 0.14, 0] ,
[0, 1, 0, 1, 0, 1, 1, 0, 0.13, 0.85, 0.02, 0] ,
[0, 1, 0, 1, 0, 1, 1, 1, 0.09, 0.88, 0.03, 0] ,
[0, 1, 0, 1, 1, 0, 0, 0, 0.02, 0.81, 0.17, 0] ,
[0, 1, 0, 1, 1, 0, 0, 1, 0.02, 0.84, 0.13, 0] ,
[0, 1, 0, 1, 1, 0, 1, 0, 0.12, 0.86, 0.02, 0] ,
[0, 1, 0, 1, 1, 0, 1, 1, 0.08, 0.89, 0.03, 0] ,
[0, 1, 0, 1, 1, 1, 0, 0, 0.08, 0.89, 0.03, 0] ,
[0, 1, 0, 1, 1, 1, 0, 1, 0.07, 0.9, 0.03, 2] ,
[0, 1, 0, 1, 1, 1, 1, 0, 0.37, 0.63, 0.0, 7] ,
[0, 1, 0, 1, 1, 1, 1, 1, 0.29, 0.71, 0.0, 4] ,
[0, 1, 1, 0, 0, 0, 0, 0, 0.0, 0.05, 0.95, 0] ,
[0, 1, 1, 0, 0, 0, 0, 1, 0.0, 0.07, 0.93, 0] ,
[0, 1, 1, 0, 0, 0, 1, 0, 0.04, 0.83, 0.13, 0] ,
[0, 1, 1, 0, 0, 0, 1, 1, 0.03, 0.84, 0.13, 0] ,
[0, 1, 1, 0, 0, 1, 0, 0, 0.01, 0.7, 0.29, 0] ,
[0, 1, 1, 0, 0, 1, 0, 1, 0.02, 0.75, 0.23, 0] ,
[0, 1, 1, 0, 0, 1, 1, 0, 0.35, 0.65, 0.01, 0] ,
[0, 1, 1, 0, 0, 1, 1, 1, 0.35, 0.64, 0.0, 0] ,
[0, 1, 1, 0, 1, 0, 0, 0, 0.02, 0.76, 0.22, 0] ,
[0, 1, 1, 0, 1, 0, 0, 1, 0.02, 0.8, 0.17, 0] ,
[0, 1, 1, 0, 1, 0, 1, 0, 0.39, 0.6, 0.0, 0] ,
[0, 1, 1, 0, 1, 0, 1, 1, 0.35, 0.65, 0.0, 0] ,
[0, 1, 1, 0, 1, 1, 0, 0, 0.17, 0.82, 0.02, 0] ,
[0, 1, 1, 0, 1, 1, 0, 1, 0.14, 0.85, 0.02, 0] ,
[0, 1, 1, 0, 1, 1, 1, 0, 0.7, 0.3, 0.0, 0] ,
[0, 1, 1, 0, 1, 1, 1, 1, 0.67, 0.33, 0.0, 0] ,
[0, 1, 1, 1, 0, 0, 0, 0, 0.0, 0.07, 0.93, 0] ,
[0, 1, 1, 1, 0, 0, 0, 1, 0.0, 0.12, 0.88, 0] ,
[0, 1, 1, 1, 0, 0, 1, 0, 0.03, 0.84, 0.13, 0] ,
[0, 1, 1, 1, 0, 0, 1, 1, 0.03, 0.85, 0.13, 2] ,
[0, 1, 1, 1, 0, 1, 0, 0, 0.02, 0.78, 0.2, 0] ,
[0, 1, 1, 1, 0, 1, 0, 1, 0.02, 0.83, 0.14, 0] ,
[0, 1, 1, 1, 0, 1, 1, 0, 0.34, 0.66, 0.0, 0] ,
[0, 1, 1, 1, 0, 1, 1, 1, 0.29, 0.71, 0.01, 0] ,
[0, 1, 1, 1, 1, 0, 0, 0, 0.03, 0.83, 0.14, 0] ,
[0, 1, 1, 1, 1, 0, 0, 1, 0.03, 0.86, 0.11, 0] ,
[0, 1, 1, 1, 1, 0, 1, 0, 0.35, 0.65, 0.0, 0] ,
[0, 1, 1, 1, 1, 0, 1, 1, 0.27, 0.72, 0.01, 0] ,
[0, 1, 1, 1, 1, 1, 0, 0, 0.17, 0.82, 0.01, 0] ,
[0, 1, 1, 1, 1, 1, 0, 1, 0.12, 0.87, 0.02, 1] ,
[0, 1, 1, 1, 1, 1, 1, 0, 0.66, 0.34, 0.0, 0] ,
[0, 1, 1, 1, 1, 1, 1, 1, 0.61, 0.39, 0.0, 0] ,
[1, 0, 0, 0, 0, 0, 0, 0, 0.0, 0.03, 0.97, 17] ,
[1, 0, 0, 0, 0, 0, 0, 1, 0.0, 0.03, 0.97, 18] ,
[1, 0, 0, 0, 0, 0, 1, 0, 0.0, 0.35, 0.65, 0] ,
[1, 0, 0, 0, 0, 0, 1, 1, 0.0, 0.36, 0.63, 0] ,
[1, 0, 0, 0, 0, 1, 0, 0, 0.0, 0.33, 0.67, 1] ,
[1, 0, 0, 0, 0, 1, 0, 1, 0.0, 0.45, 0.54, 2] ,
[1, 0, 0, 0, 0, 1, 1, 0, 0.1, 0.86, 0.04, 0] ,
[1, 0, 0, 0, 0, 1, 1, 1, 0.09, 0.88, 0.04, 2] ,
[1, 0, 0, 0, 1, 0, 0, 0, 0.01, 0.47, 0.53, 4] ,
[1, 0, 0, 0, 1, 0, 0, 1, 0.01, 0.58, 0.41, 2] ,
[1, 0, 0, 0, 1, 0, 1, 0, 0.13, 0.84, 0.03, 0] ,
[1, 0, 0, 0, 1, 0, 1, 1, 0.1, 0.87, 0.03, 0] ,
[1, 0, 0, 0, 1, 1, 0, 0, 0.06, 0.88, 0.05, 0] ,
[1, 0, 0, 0, 1, 1, 0, 1, 0.06, 0.89, 0.05, 0] ,
[1, 0, 0, 0, 1, 1, 1, 0, 0.5, 0.5, 0.0, 1] ,
[1, 0, 0, 0, 1, 1, 1, 1, 0.41, 0.59, 0.0, 4] ,
[1, 0, 0, 1, 0, 0, 0, 0, 0.0, 0.04, 0.96, 13] ,
[1, 0, 0, 1, 0, 0, 0, 1, 0.0, 0.04, 0.96, 27] ,
[1, 0, 0, 1, 0, 0, 1, 0, 0.0, 0.31, 0.69, 2] ,
[1, 0, 0, 1, 0, 0, 1, 1, 0.0, 0.37, 0.62, 2] ,
[1, 0, 0, 1, 0, 1, 0, 0, 0.0, 0.5, 0.49, 0] ,
[1, 0, 0, 1, 0, 1, 0, 1, 0.01, 0.64, 0.35, 0] ,
[1, 0, 0, 1, 0, 1, 1, 0, 0.07, 0.88, 0.04, 4] ,
[1, 0, 0, 1, 0, 1, 1, 1, 0.06, 0.9, 0.05, 3] ,
[1, 0, 0, 1, 1, 0, 0, 0, 0.01, 0.66, 0.33, 1] ,
[1, 0, 0, 1, 1, 0, 0, 1, 0.01, 0.76, 0.22, 12] ,
[1, 0, 0, 1, 1, 0, 1, 0, 0.08, 0.88, 0.04, 0] ,
[1, 0, 0, 1, 1, 0, 1, 1, 0.06, 0.9, 0.05, 0] ,
[1, 0, 0, 1, 1, 1, 0, 0, 0.06, 0.89, 0.04, 3] ,
[1, 0, 0, 1, 1, 1, 0, 1, 0.06, 0.9, 0.04, 4] ,
[1, 0, 0, 1, 1, 1, 1, 0, 0.39, 0.61, 0.0, 6] ,
[1, 0, 0, 1, 1, 1, 1, 1, 0.27, 0.73, 0.0, 17] ,
[1, 0, 1, 0, 0, 0, 0, 0, 0.0, 0.03, 0.97, 1] ,
[1, 0, 1, 0, 0, 0, 0, 1, 0.0, 0.03, 0.97, 4] ,
[1, 0, 1, 0, 0, 0, 1, 0, 0.01, 0.64, 0.35, 0] ,
[1, 0, 1, 0, 0, 0, 1, 1, 0.01, 0.62, 0.37, 0] ,
[1, 0, 1, 0, 0, 1, 0, 0, 0.0, 0.41, 0.59, 4] ,
[1, 0, 1, 0, 0, 1, 0, 1, 0.0, 0.46, 0.54, 0] ,
[1, 0, 1, 0, 0, 1, 1, 0, 0.21, 0.78, 0.01, 0] ,
[1, 0, 1, 0, 0, 1, 1, 1, 0.19, 0.79, 0.01, 0] ,
[1, 0, 1, 0, 1, 0, 0, 0, 0.01, 0.53, 0.46, 1] ,
[1, 0, 1, 0, 1, 0, 0, 1, 0.01, 0.57, 0.42, 1] ,
[1, 0, 1, 0, 1, 0, 1, 0, 0.27, 0.72, 0.01, 0] ,
[1, 0, 1, 0, 1, 0, 1, 1, 0.24, 0.75, 0.01, 0] ,
[1, 0, 1, 0, 1, 1, 0, 0, 0.14, 0.84, 0.02, 0] ,
[1, 0, 1, 0, 1, 1, 0, 1, 0.12, 0.86, 0.02, 0] ,
[1, 0, 1, 0, 1, 1, 1, 0, 0.7, 0.3, 0.0, 0] ,
[1, 0, 1, 0, 1, 1, 1, 1, 0.68, 0.32, 0.0, 5] ,
[1, 0, 1, 1, 0, 0, 0, 0, 0.0, 0.03, 0.97, 21] ,
[1, 0, 1, 1, 0, 0, 0, 1, 0.0, 0.03, 0.97, 11] ,
[1, 0, 1, 1, 0, 0, 1, 0, 0.01, 0.6, 0.4, 0] ,
[1, 0, 1, 1, 0, 0, 1, 1, 0.01, 0.61, 0.38, 0] ,
[1, 0, 1, 1, 0, 1, 0, 0, 0.01, 0.52, 0.48, 3] ,
[1, 0, 1, 1, 0, 1, 0, 1, 0.01, 0.58, 0.42, 3] ,
[1, 0, 1, 1, 0, 1, 1, 0, 0.18, 0.81, 0.01, 0] ,
[1, 0, 1, 1, 0, 1, 1, 1, 0.15, 0.83, 0.01, 0] ,
[1, 0, 1, 1, 1, 0, 0, 0, 0.01, 0.64, 0.35, 0] ,
[1, 0, 1, 1, 1, 0, 0, 1, 0.01, 0.71, 0.28, 0] ,
[1, 0, 1, 1, 1, 0, 1, 0, 0.22, 0.77, 0.01, 0] ,
[1, 0, 1, 1, 1, 0, 1, 1, 0.17, 0.81, 0.01, 0] ,
[1, 0, 1, 1, 1, 1, 0, 0, 0.15, 0.84, 0.02, 0] ,
[1, 0, 1, 1, 1, 1, 0, 1, 0.1, 0.88, 0.02, 3] ,
[1, 0, 1, 1, 1, 1, 1, 0, 0.67, 0.33, 0.0, 2] ,
[1, 0, 1, 1, 1, 1, 1, 1, 0.62, 0.38, 0.0, 3] ,
[1, 1, 0, 0, 0, 0, 0, 0, 0.0, 0.04, 0.96, 9] ,
[1, 1, 0, 0, 0, 0, 0, 1, 0.0, 0.05, 0.95, 10] ,
[1, 1, 0, 0, 0, 0, 1, 0, 0.01, 0.63, 0.36, 0] ,
[1, 1, 0, 0, 0, 0, 1, 1, 0.01, 0.67, 0.32, 0] ,
[1, 1, 0, 0, 0, 1, 0, 0, 0.01, 0.64, 0.35, 1] ,
[1, 1, 0, 0, 0, 1, 0, 1, 0.01, 0.75, 0.23, 4] ,
[1, 1, 0, 0, 0, 1, 1, 0, 0.19, 0.8, 0.01, 0] ,
[1, 1, 0, 0, 0, 1, 1, 1, 0.16, 0.83, 0.01, 0] ,
[1, 1, 0, 0, 1, 0, 0, 0, 0.02, 0.75, 0.23, 4] ,
[1, 1, 0, 0, 1, 0, 0, 1, 0.02, 0.81, 0.17, 10] ,
[1, 1, 0, 0, 1, 0, 1, 0, 0.22, 0.77, 0.01, 2] ,
[1, 1, 0, 0, 1, 0, 1, 1, 0.16, 0.83, 0.01, 0] ,
[1, 1, 0, 0, 1, 1, 0, 0, 0.09, 0.88, 0.03, 6] ,
[1, 1, 0, 0, 1, 1, 0, 1, 0.08, 0.89, 0.03, 9] ,
[1, 1, 0, 0, 1, 1, 1, 0, 0.61, 0.39, 0.0, 32] ,
[1, 1, 0, 0, 1, 1, 1, 1, 0.53, 0.47, 0.0, 21] ,
[1, 1, 0, 1, 0, 0, 0, 0, 0.0, 0.05, 0.94, 12] ,
[1, 1, 0, 1, 0, 0, 0, 1, 0.0, 0.1, 0.9, 16] ,
[1, 1, 0, 1, 0, 0, 1, 0, 0.01, 0.6, 0.39, 0] ,
[1, 1, 0, 1, 0, 0, 1, 1, 0.01, 0.67, 0.32, 2] ,
[1, 1, 0, 1, 0, 1, 0, 0, 0.01, 0.76, 0.23, 5] ,
[1, 1, 0, 1, 0, 1, 0, 1, 0.02, 0.83, 0.15, 5] ,
[1, 1, 0, 1, 0, 1, 1, 0, 0.13, 0.85, 0.02, 6] ,
[1, 1, 0, 1, 0, 1, 1, 1, 0.1, 0.89, 0.02, 4] ,
[1, 1, 0, 1, 1, 0, 0, 0, 0.02, 0.82, 0.16, 12] ,
[1, 1, 0, 1, 1, 0, 0, 1, 0.02, 0.85, 0.12, 20] ,
[1, 1, 0, 1, 1, 0, 1, 0, 0.13, 0.85, 0.02, 1] ,
[1, 1, 0, 1, 1, 0, 1, 1, 0.09, 0.89, 0.02, 7] ,
[1, 1, 0, 1, 1, 1, 0, 0, 0.09, 0.89, 0.02, 14] ,
[1, 1, 0, 1, 1, 1, 0, 1, 0.08, 0.9, 0.02, 14] ,
[1, 1, 0, 1, 1, 1, 1, 0, 0.51, 0.49, 0.0, 31] ,
[1, 1, 0, 1, 1, 1, 1, 1, 0.38, 0.62, 0.0, 59] ,
[1, 1, 1, 0, 0, 0, 0, 0, 0.0, 0.05, 0.95, 3] ,
[1, 1, 1, 0, 0, 0, 0, 1, 0.0, 0.05, 0.95, 8] ,
[1, 1, 1, 0, 0, 0, 1, 0, 0.03, 0.83, 0.15, 3] ,
[1, 1, 1, 0, 0, 0, 1, 1, 0.02, 0.83, 0.15, 0] ,
[1, 1, 1, 0, 0, 1, 0, 0, 0.01, 0.72, 0.27, 0] ,
[1, 1, 1, 0, 0, 1, 0, 1, 0.01, 0.75, 0.23, 0] ,
[1, 1, 1, 0, 0, 1, 1, 0, 0.35, 0.65, 0.0, 0] ,
[1, 1, 1, 0, 0, 1, 1, 1, 0.33, 0.67, 0.0, 2] ,
[1, 1, 1, 0, 1, 0, 0, 0, 0.02, 0.79, 0.19, 2] ,
[1, 1, 1, 0, 1, 0, 0, 1, 0.02, 0.82, 0.15, 0] ,
[1, 1, 1, 0, 1, 0, 1, 0, 0.43, 0.57, 0.0, 0] ,
[1, 1, 1, 0, 1, 0, 1, 1, 0.38, 0.61, 0.0, 3] ,
[1, 1, 1, 0, 1, 1, 0, 0, 0.22, 0.77, 0.01, 9] ,
[1, 1, 1, 0, 1, 1, 0, 1, 0.19, 0.8, 0.01, 12] ,
[1, 1, 1, 0, 1, 1, 1, 0, 0.75, 0.25, 0.0, 44] ,
[1, 1, 1, 0, 1, 1, 1, 1, 0.73, 0.27, 0.0, 35] ,
[1, 1, 1, 1, 0, 0, 0, 0, 0.0, 0.05, 0.95, 11] ,
[1, 1, 1, 1, 0, 0, 0, 1, 0.0, 0.07, 0.93, 3] ,
[1, 1, 1, 1, 0, 0, 1, 0, 0.02, 0.82, 0.16, 0] ,
[1, 1, 1, 1, 0, 0, 1, 1, 0.02, 0.83, 0.15, 0] ,
[1, 1, 1, 1, 0, 1, 0, 0, 0.01, 0.77, 0.21, 0] ,
[1, 1, 1, 1, 0, 1, 0, 1, 0.02, 0.81, 0.18, 1] ,
[1, 1, 1, 1, 0, 1, 1, 0, 0.31, 0.69, 0.0, 0] ,
[1, 1, 1, 1, 0, 1, 1, 1, 0.26, 0.74, 0.01, 0] ,
[1, 1, 1, 1, 1, 0, 0, 0, 0.02, 0.83, 0.15, 8] ,
[1, 1, 1, 1, 1, 0, 0, 1, 0.02, 0.85, 0.12, 4] ,
[1, 1, 1, 1, 1, 0, 1, 0, 0.35, 0.64, 0.0, 0] ,
[1, 1, 1, 1, 1, 0, 1, 1, 0.28, 0.72, 0.0, 0] ,
[1, 1, 1, 1, 1, 1, 0, 0, 0.23, 0.77, 0.01, 3] ,
[1, 1, 1, 1, 1, 1, 0, 1, 0.15, 0.84, 0.01, 4] ,
[1, 1, 1, 1, 1, 1, 1, 0, 0.73, 0.27, 0.0, 44] ,
[1, 1, 1, 1, 1, 1, 1, 1, 0.68, 0.32, 0.0, 49] 
];
sou=.333;
cen=.333;
fed=.333;


// Fonction pour obtenir une prédiction basée sur les variables
function obtenirPrédiction(var1, var2, var3, var4, var5, var6, var7, var8) {
  console.log("Variables reçues :", { var1, var2, var3, var4, var5, var6, var7, var8 });
  
  for (const ligne of données) {
    //console.log("Comparaison avec la ligne :", ligne);
    if (
      ligne[0] === var1 && ligne[1] === var2 &&
      ligne[2] === var3 && ligne[3] === var4 &&
      ligne[4] === var5 && ligne[5] === var6 &&
      ligne[6] === var7 && ligne[7] === var8
    ) {
      // Souverainiste: "+ligne[8]+ "  Centriste: "+ligne[9]+"  Fédéraliste: "+ligne[10] + " Nombre de cas réels: "+ligne[11]
      console.log("Correspondance trouvée pour les souverainistes :", ligne[8]);
      //return 'souverainiste: '+ligne[8], ligne[9], ligne[10], ligne[11]; // Retourne la prédiction trouvée
      return "Souverainiste: "+ligne[8]+ "  Centriste: "+ligne[9]+"  Fédéraliste: "+ligne[10] + " Nombre de cas réels: "+ligne[11]
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
        ? `Prédiction : ${prédiction}`
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

