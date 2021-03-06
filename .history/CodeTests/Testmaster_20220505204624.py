from unittest import TestResult
import pytest

global testresult

def pytest_sessionstart(session):
    session.results = dict()


@pytest.hookimpl(tryfirst=True, hookwrapper=True)
def pytest_runtest_makereport(item, call):
    outcome = yield
    result = outcome.get_result()

    if result.when == 'call':
        item.session.results[item] = result

def pytest_sessionfinish(session, exitstatus):
    print()
    testresult = exitstatus
    print('run status code:', testresult)
    
    
print(testresult)