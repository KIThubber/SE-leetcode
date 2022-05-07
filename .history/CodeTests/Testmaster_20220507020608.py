import pytest
import sys
import io


    
if __name__ == '__main__':
    stdout_bak = sys.stdout  # backup stdout
    sys.stdout = io.StringIO()
    pytest.main()
    output = sys.stdout.getvalue()
    sys.stdout.close()
    sys.stdout = stdout_bak  # restore stdout
    print(output)


